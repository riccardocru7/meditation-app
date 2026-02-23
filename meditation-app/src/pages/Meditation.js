import Timer from "../components/Timer";
import Controls from "../components/Controls";
import { useContext } from "react";
import { TimerContext } from "../context/TimerContext";

export default function Meditation() {
  const { stopTimer, resetTimer, resumeTimer } = useContext(TimerContext);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Meditazione</h1>
      <p style={styles.subtitle}>Imposta il timer e rilassati.</p>

      <div style={styles.timerSection}>
        <Timer />
      </div>

      <div style={styles.controlsSection}>
        <Controls
          onStop={stopTimer}
          onReset={resetTimer}
          onResume={resumeTimer}
        />
      </div>
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
    fontSize: "42px",
    color: "white",
    marginBottom: "10px",
  },

  subtitle: {
    color: "white",
    marginBottom: "40px",
  },

  timerSection: {
    marginBottom: "30px",
  },

  controlsSection: {
    display: "flex",
    gap: "15px",
  },
};