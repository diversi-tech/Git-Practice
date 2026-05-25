import { PageProps } from "../../types";

export default function NoaJokePage({ onBack }: PageProps) {
  return (
    <div
      className="joke-page-wrapper"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
        padding: "20px",
      }}
    >
      <div
        className="joke-page-container"
        style={{
          width: "100%",
          maxWidth: "480px",
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          textAlign: "center",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* הרקע המקושט עם הנקודות (ציור) */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "radial-gradient(#d0d9e8 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            opacity: 0.5,
            zIndex: 0,
          }}
        ></div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <h1 style={{ fontSize: "2rem", color: "#333", marginBottom: "25px" }}>The Joke Page</h1>

          {/* הציור של המחשב והלבבות */}
          <div style={{ fontSize: "5rem", marginBottom: "20px" }}>💻🤍</div>

          {/* הבדיחה */}
          <p style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#333", marginBottom: "15px" }}>
            יש 10 סוגים של אנשים בעולם:
          </p>
          <p style={{ fontSize: "1.3rem", color: "#1a5fb4", fontWeight: "600", marginBottom: "30px" }}>
            אלו שמבינים קוד בינארי, ואלו שלא. 🤓
          </p>

          {/* הכפתור */}
          <button
            onClick={onBack}
            style={{
              marginTop: "10px",
              padding: "10px 20px",
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: "6px",
              color: "#555",
              cursor: "pointer",
              transition: "border-color 0.2s, background-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#1a5fb4";
              e.currentTarget.style.backgroundColor = "#f2f7fd";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#ccc";
              e.currentTarget.style.backgroundColor = "#fff";
            }}
          >
            ← חזרה
          </button>
        </div>
      </div>
    </div>
  );
}