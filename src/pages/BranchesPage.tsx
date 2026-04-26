import { useNavigate } from "react-router-dom";
import branchData from "../generated/branches";
import type { BranchEntry } from "../types";

// ── Tree building ─────────────────────────────────────────────

interface TreeNode extends BranchEntry {
  children: TreeNode[];
}

function buildTree(branches: BranchEntry[]): TreeNode[] {
  const map = new Map<string, TreeNode>(
    branches.map((b) => [b.name, { ...b, children: [] }])
  );

  const roots: TreeNode[] = [];

  for (const node of map.values()) {
    if (node.parentBranch && map.has(node.parentBranch)) {
      map.get(node.parentBranch)!.children.push(node);
    } else {
      roots.push(node);
    }
  }

  return roots;
}

// ── Node component ────────────────────────────────────────────

function BranchNode({ node, isLast }: { node: TreeNode; isLast: boolean }) {
  const hasChildren = node.children.length > 0;

  return (
    <div className={`bg-node-wrap ${isLast ? "bg-node-wrap--last" : ""}`}>
      <div
        className={[
          "bg-node",
          node.isCurrent ? "bg-node--current" : "",
          node.parentBranch === null ? "bg-node--root" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {/* status dot */}
        <span
          className={`bg-dot ${
            node.parentBranch === null
              ? "bg-dot--root"
              : node.isMergedIntoParent
              ? "bg-dot--merged"
              : "bg-dot--pending"
          }`}
        />

        {/* branch info */}
        <div className="bg-info">
          <span className="bg-name">{node.name}</span>
          {node.shortHash && (
            <code className="bg-hash">{node.shortHash}</code>
          )}
          {node.lastCommitMessage && (
            <span className="bg-msg">{node.lastCommitMessage}</span>
          )}
        </div>

        {/* badges */}
        <div className="bg-badges">
          {node.isCurrent && (
            <span className="bg-badge bg-badge--current">HEAD</span>
          )}
          {node.parentBranch !== null && (
            <span
              className={`bg-badge ${
                node.isMergedIntoParent
                  ? "bg-badge--merged"
                  : "bg-badge--pending"
              }`}
            >
              {node.isMergedIntoParent ? "✓ מוזג" : "⧖ ממתין"}
            </span>
          )}
        </div>
      </div>

      {hasChildren && (
        <div className="bg-children">
          {node.children.map((child, i) => (
            <BranchNode
              key={child.name}
              node={child}
              isLast={i === node.children.length - 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────

export default function BranchesPage() {
  const navigate = useNavigate();
  const { branches, generatedAt, mainBranch } = branchData;

  const tree = buildTree(branches);
  const updatedAt = new Date(generatedAt).toLocaleString("he-IL");
  const mergedCount = branches.filter(
    (b) => b.isMergedIntoParent && b.parentBranch !== null
  ).length;
  const pendingCount = branches.filter(
    (b) => !b.isMergedIntoParent && b.parentBranch !== null
  ).length;

  return (
    <div className="bg-page">
      <button className="instructions-back-btn" onClick={() => navigate(-1)}>
        → חזרה
      </button>

      <div className="bg-container">
        <div className="bg-header">
          <h1>🌿 גרף הבראנצ'ים</h1>
          <p className="bg-subtitle">מבנה הבראנצ'ים לפי היסטוריית git
          </p>
        </div>

        {/* stats */}
        <div className="bg-stats">
          <div className="bg-stat">
            <span className="bg-stat-num">{branches.length}</span>
            <span className="bg-stat-label">בראנצ'ים</span>
          </div>
          <div className="bg-stat bg-stat--merged">
            <span className="bg-stat-num">{mergedCount}</span>
            <span className="bg-stat-label">מוזגו</span>
          </div>
          <div className="bg-stat bg-stat--pending">
            <span className="bg-stat-num">{pendingCount}</span>
            <span className="bg-stat-label">ממתינים</span>
          </div>
        </div>

        {/* legend */}
        <div className="bg-legend">
          <span><span className="bg-dot bg-dot--root" /> ראשי</span>
          <span><span className="bg-dot bg-dot--merged" /> מוזג לבראנץ' האב</span>
          <span><span className="bg-dot bg-dot--pending" /> ממתין למיזוג</span>
          <span><span className="bg-badge bg-badge--current">HEAD</span> בראנץ' נוכחי</span>
        </div>

        {/* tree */}
        <div className="bg-tree">
          {tree.length === 0 ? (
            <p className="bg-empty">
              אין עדיין בראנצ'ים. הריצי <code>npm run gen-branches</code> לאחר יצירת בראנצ'ים.
            </p>
          ) : (
            tree.map((root, i) => (
              <BranchNode key={root.name} node={root} isLast={i === tree.length - 1} />
            ))
          )}
        </div>

        <p className="bg-footer">
          עודכן: {updatedAt} &nbsp;·&nbsp; בראנץ' ראשי: <code>{mainBranch}</code>
          &nbsp;·&nbsp; <code>npm run gen-branches</code>
        </p>
      </div>
    </div>
  );
}
