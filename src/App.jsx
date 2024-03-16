import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="md:max-w-6xl md:mx-auto">
      <header>
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
    </div>
  );
}

export default App;
