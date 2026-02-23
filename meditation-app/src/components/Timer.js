import { useContext, useState } from "react";
import { TimerContext } from "../context/TimerContext";

export default function Timer() {
  const { seconds, startTimer } = useContext(TimerContext);
  const [input, setInput] = useState("");

  const handleStart = () => {
    if (!input) return;
    startTimer(parseInt(input) * 60);
  };

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <div style={styles.container}>
      
      <div style={styles.circle}>
        <h2 style={styles.time}>
          {minutes}:{secs.toString().padStart(2, "0")}
        </h2>
      </div>

      <div style={styles.controls}>
        <input
          type="number"
          placeholder="Minuti"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
        />

        <button onClick={handleStart} style={styles.button}>
          Start
        </button>
      </div>

    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "30px",
  },

  circle: {
    width: "260px",
    height: "260px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    background: "linear-gradient(135deg, #7f9cff, #5ce1e6)",
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
  },

  time: {
    color: "white",
    fontSize: "48px",
    margin: 0,
  },

  controls: {
    display: "flex",
    gap: "10px",
  },

  input: {
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    fontSize: "16px",
    width: "100px",
    textAlign: "center",
  },

  button: {
    padding: "12px 20px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "white",
    color: "#66a6ff",
    fontSize: "16px",
    cursor: "pointer",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
  },
};