import React, { useState } from 'react';

export default function NoaJokePage() {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div style={styles.container}>
      <div style={styles.glowBg}></div>

      <div style={styles.card}>
        <div style={styles.headerBadge}>#NoaCard #DevLife</div>
        
        {/* אזור האיור הגדול בעמוד הבדיחה */}
        <div style={styles.mainIllustration}>
          <div style={styles.devIcon}>👨‍💻</div>
          <div style={styles.cookieCloud}>
            <span style={styles.movingCookie}>🍪</span>
            <span style={styles.movingCookie2}>🍪</span>
            <span style={styles.movingCookie3}>🍪</span>
          </div>
        </div>

        <h1 style={styles.title}>Noa's Dev Joke of the Week</h1>
        
        <p style={styles.question}>
          שאלה: מה מתכנת עושה כשהוא רוצה להרזות?
        </p>

        <button 
          onClick={() => setShowAnswer(!showAnswer)} 
          style={{
            ...styles.button,
            ...(showAnswer ? styles.buttonActive : {})
          }}
        >
          {showAnswer ? 'תחביא תשובה 🙈' : 'תשובה: לחצי כאן לחשיפה ✨'}
        </button>

        <div style={{
          ...styles.answerContainer,
          opacity: showAnswer ? 1 : 0,
          transform: showAnswer ? 'translateY(0)' : 'translateY(15px)',
          maxHeight: showAnswer ? '100px' : '0'
        }}>
          <p style={styles.answer}>
            מוחק את ה-<span style={styles.highlight}>קוקיז (Cookies)</span> בדפדפן! 💻🍪
          </p>
        </div>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#0f172a',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    direction: 'rtl',
    position: 'relative',
    overflow: 'hidden',
    padding: '20px',
  },
  glowBg: {
    position: 'absolute',
    width: '500px',
    height: '500px',
    background: 'radial-gradient(circle, rgba(56,189,248,0.12) 0%, rgba(0,0,0,0) 70%)',
    top: '20%',
    left: '15%',
    zIndex: 0,
  },
  card: {
    background: 'rgba(30, 41, 59, 0.7)',
    backdropFilter: 'blur(16px)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '28px',
    padding: '40px 30px',
    width: '100%',
    maxWidth: '480px',
    textAlign: 'center',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4)',
    zIndex: 1,
  },
  headerBadge: {
    color: '#38bdf8',
    fontSize: '12px',
    fontFamily: 'monospace',
    letterSpacing: '1px',
    marginBottom: '20px',
  },
  mainIllustration: {
    height: '130px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: '20px',
  },
  devIcon: {
    fontSize: '64px',
    zIndex: 2,
  },
  cookieCloud: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  movingCookie: { position: 'absolute', top: '10px', right: '140px', fontSize: '28px' },
  movingCookie2: { position: 'absolute', bottom: '20px', left: '130px', fontSize: '24px' },
  movingCookie3: { position: 'absolute', top: '40px', right: '100px', fontSize: '20px', opacity: 0.6 },
  title: {
    color: '#ffffff',
    fontSize: '22px',
    fontWeight: '800',
    marginBottom: '15px',
    letterSpacing: '-0.5px',
  },
  question: {
    color: '#94a3b8',
    fontSize: '18px',
    fontWeight: '500',
    lineHeight: '1.5',
    marginBottom: '30px',
  },
  button: {
    background: 'linear-gradient(135deg, #38bdf8 0%, #0369a1 100%)', 
    color: '#ffffff',
    border: 'none',
    borderRadius: '14px',
    padding: '14px 32px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 4px 20px rgba(56, 189, 248, 0.3)',
    transition: 'all 0.2s ease',
  },
  buttonActive: {
    background: '#1e293b',
    boxShadow: 'none',
    border: '1px solid rgba(255,255,255,0.1)',
  },
  answerContainer: {
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    overflow: 'hidden',
  },
  answer: {
    color: '#34d399', 
    fontSize: '22px',
    fontWeight: '700',
    marginTop: '25px',
  },
  highlight: {
    color: '#fbbf24', 
    textDecoration: 'underline',
  }
};