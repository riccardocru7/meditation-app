import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Meditation from "./pages/Meditation";
import { TimerProvider } from "./context/TimerContext";

function App() {
  return (
    <TimerProvider>
      <BrowserRouter basename="/meditation-app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meditation" element={<Meditation />} />
        </Routes>
      </BrowserRouter>
    </TimerProvider>
  );
}

export default App;