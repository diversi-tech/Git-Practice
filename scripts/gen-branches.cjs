#!/usr/bin/env node
'use strict';

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT_FILE = path.join(ROOT, 'src', 'generated', 'branches.ts');

function exec(cmd) {
  try {
    return execSync(cmd, { cwd: ROOT, encoding: 'utf8' }).trim();
  } catch {
    return '';
  }
}

// ── Git helpers ──────────────────────────────────────────────

function getAllBranches() {
  const raw = exec('git branch -a');
  return raw
    .split('\n')
    .map(b => b.replace(/^\*?\s+/, '').replace(/^remotes\/origin\//, '').trim())
    .filter(b => b && !b.includes('->'))
    .filter((b, i, arr) => arr.indexOf(b) === i)
    .sort();
}

function getCurrentBranch() {
  return exec('git rev-parse --abbrev-ref HEAD');
}

function getTip(branch) {
  return exec(`git rev-parse ${branch}`);
}

function getMergeBase(a, b) {
  return exec(`git merge-base ${a} ${b}`);
}

function getCommitTimestamp(hash) {
  if (!hash) return 0;
  return parseInt(exec(`git log -1 --format=%ct ${hash}`)) || 0;
}

function getShortHash(branch) {
  return exec(`git rev-parse --short ${branch}`);
}

function getLastCommitMessage(branch) {
  return exec(`git log -1 --format=%s ${branch}`);
}

// ── Parent detection ─────────────────────────────────────────
//
// For branch B, the parent is the branch P where merge-base(B, P)
// is the most recent. We skip P when merge-base(B,P) == tip(B),
// which means B is an ancestor of P (not the other way around).

function findParentBranch(branchName, allBranches, tips) {
  const myTip = tips[branchName];
  if (!myTip) return null;

  let bestParent = null;
  let bestTimestamp = -1;

  for (const other of allBranches) {
    if (other === branchName) continue;
    const otherTip = tips[other];
    if (!otherTip) continue;

    const base = getMergeBase(branchName, other);
    if (!base) continue;

    // Skip: B is an ancestor of other → other is a child of B, not its parent
    if (base === myTip) continue;

    const ts = getCommitTimestamp(base);
    if (ts > bestTimestamp) {
      bestTimestamp = ts;
      bestParent = other;
    }
  }

  return bestParent;
}

// B is "merged into parent" when B's tip is reachable from parent's tip
function isMergedInto(branch, parent, tips) {
  if (!parent) return false;
  const base = getMergeBase(branch, parent);
  return base === tips[branch];
}

// ── Main ─────────────────────────────────────────────────────

const allBranches = getAllBranches();
const currentBranch = getCurrentBranch();
const mainBranch = allBranches.find(b => b === 'main' || b === 'master') || allBranches[0] || 'main';

// Pre-fetch all tips (one git call per branch)
const tips = {};
for (const b of allBranches) {
  tips[b] = getTip(b);
}

const branches = allBranches.map(name => {
  const parentBranch = findParentBranch(name, allBranches, tips);
  return {
    name,
    parentBranch,
    shortHash: getShortHash(name),
    lastCommitMessage: getLastCommitMessage(name),
    isMergedIntoParent: isMergedInto(name, parentBranch, tips),
    isCurrent: name === currentBranch,
  };
});

const data = { generatedAt: new Date().toISOString(), currentBranch, mainBranch, branches };

const content =
`// AUTO-GENERATED — run \`npm run gen-branches\` to update
import type { BranchData } from "../types";

const data: BranchData = ${JSON.stringify(data, null, 2)};

export default data;
`;

const outDir = path.dirname(OUT_FILE);
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(OUT_FILE, content, 'utf8');
console.log(`✅ Generated src/generated/branches.ts (${branches.length} branches)`);
