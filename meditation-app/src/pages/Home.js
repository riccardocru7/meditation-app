import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Meditation Timer</h1>
      <p style={styles.subtitle}>
        Benvenuto. Inizia la tua sessione di meditazione.
      </p>

      <Link to="/meditation">
        <button style={styles.button}>Inizia meditazione</button>
      </Link>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    background: "linear-gradient(135deg, #89f7fe, #66a6ff)",
    fontFamily: "Arial, sans-serif",
  },

  title: {
    fontSize: "48px",
    color: "white",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "18px",
    color: "white",
    marginBottom: "30px",
  },

  button: {
    padding: "15px 30px",
    fontSize: "18px",
    border: "none",
    borderRadius: "12px",
    backgroundColor: "white",
    color: "#66a6ff",
    cursor: "pointer",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    transition: "0.3s",
  },
};