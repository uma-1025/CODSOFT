import Header from "./components/Header";
import Features from "./components/Features";
import About from "./components/About";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="landing-page">
      <Header />
      <Features />
      <About />
      <Footer />
    </div>
  );
}

export default App;
