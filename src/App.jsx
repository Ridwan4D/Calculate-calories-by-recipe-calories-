import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Recipes from "./components/Recipes";

function App() {
  return (
    <div className="md:max-w-6xl md:mx-auto">
      <header>
        <Navbar></Navbar>
        <Banner></Banner>
        {/* recipes section */}
        <div className="mt-10 space-y-10">
          <div className="space-y-3">
            <h1 className="text-4xl font-semibold text-center">Our Recipes</h1>
            <p className="text-center text-base text-[#150B2B99]">
              Welcome to our delectable Recipes Section, where culinary
              inspiration knows no bounds! Whether you're a seasoned chef
              looking for new challenges or a novice cook eager to explore the
              world of flavors, our diverse collection of recipes caters to all
              tastes, preferences, and skill levels.
            </p>
          </div>
          <div className="flex gap-5">
            <Recipes></Recipes>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
