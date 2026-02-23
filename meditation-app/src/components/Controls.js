import { useState } from "react";

export default function Controls({ onStop, onReset, onResume }) {
  // stato hover per animazioni
  const [hoveredButton, setHoveredButton] = useState(null);

  const buttons = [
    { label: "Stop", action: onStop, bg: "#ff6b6b", color: "white" },
    { label: "Resume", action: onResume, bg: "#4cd137", color: "white" },
    { label: "Reset", action: onReset, bg: "#f5f6fa", color: "#2f3640" },
  ];

  return (
    <div style={styles.container}>
      {buttons.map((btn, index) => (
        <button
          key={index}
          onClick={btn.action}
          onMouseEnter={() => setHoveredButton(index)}
          onMouseLeave={() => setHoveredButton(null)}
          style={{
            ...styles.button,
            backgroundColor: btn.bg,
            color: btn.color,
            transform: hoveredButton === index ? "translateY(-3px)" : "translateY(0)",
            boxShadow:
              hoveredButton === index
                ? "0 10px 20px rgba(0,0,0,0.25)"
                : "0 5px 15px rgba(0,0,0,0.2)",
          }}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    padding: "12px 25px",
    border: "none",
    borderRadius: "12px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "transform 0.2s, box-shadow 0.2s",
  },
};