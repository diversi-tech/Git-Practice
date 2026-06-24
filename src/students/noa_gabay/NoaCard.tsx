import React from 'react';

interface NoaCardProps {
  onClick?: () => void;
}

export default function NoaCard({ onClick }: NoaCardProps) {
  return (
    <div onClick={onClick} style={styles.cardContainer}>
      {/* איור דיגיטלי מובנה בעזרת CSS/SVG */}
      <div style={styles.illustrationContainer}>
        <div style={styles.screen}>
          <div style={styles.codeLine}>const body = 'Diet';</div>
          <div style={styles.codeLine2}>delete window.cookies;</div>
          <span style={styles.laptopEmoji}>💻</span>
        </div>
        <div style={styles.cookiesFloating}>
          <span style={styles.cookie1}>🍪</span>
          <span style={styles.cookie2}>🍪</span>
          <span style={styles.cookie3}>🗑️</span>
        </div>
      </div>

      <h3 style={styles.cardTitle}>Noa's Dev Joke</h3>
      <p style={styles.cardSubtitle}>בדיחה  של נועה • קליק לחשיפה</p>
      
      <div style={styles.badge}>Cookies Edition 🍪</div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  cardContainer: {
    background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%)',
    border: '1px solid rgba(56, 189, 248, 0.2)', 
    borderRadius: '20px',
    padding: '25px',
    width: '280px',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    direction: 'rtl',
    margin: '15px',
  },
  illustrationContainer: {
    position: 'relative',
    height: '110px',
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    borderRadius: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '15px',
    border: '1px solid rgba(99, 102, 241, 0.2)',
    overflow: 'hidden',
  },
  screen: {
    backgroundColor: '#020617',
    width: '140px',
    height: '75px',
    borderRadius: '6px',
    padding: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  codeLine: {
    fontFamily: 'monospace',
    fontSize: '9px',
    color: '#38bdf8',
    marginBottom: '3px',
  },
  codeLine2: {
    fontFamily: 'monospace',
    fontSize: '9px',
    color: '#f43f5e',
  },
  laptopEmoji: {
    position: 'absolute',
    bottom: '12px',
    right: '75px',
    fontSize: '18px',
  },
  cookiesFloating: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
  },
  cookie1: { position: 'absolute', top: '15px', right: '25px', fontSize: '20px', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' },
  cookie2: { position: 'absolute', bottom: '15px', left: '20px', fontSize: '16px' },
  cookie3: { position: 'absolute', top: '20px', left: '30px', fontSize: '14px' },
  cardTitle: {
    color: '#ffffff',
    fontSize: '20px',
    fontWeight: '700',
    margin: '0 0 8px 0',
    letterSpacing: '0.5px',
  },
  cardSubtitle: {
    color: '#94a3b8',
    fontSize: '13px',
    margin: '0 0 15px 0',
    lineHeight: '1.4',
  },
  badge: {
    display: 'inline-block',
    backgroundColor: 'rgba(244, 63, 94, 0.15)',
    color: '#f43f5e',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '11px',
    fontWeight: '600',
    border: '1px solid rgba(244, 63, 94, 0.3)',
  },
};