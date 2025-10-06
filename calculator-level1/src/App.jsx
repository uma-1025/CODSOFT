import { useState } from "react";
import Display from "./components/Display";
import ButtonPanel from "./components/ButtonPanel";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="page-container">
      <Header />

      <main>
        <div className="calculator-container">
          <Display value={input || "0"} />
          <ButtonPanel onButtonClick={handleButtonClick} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
