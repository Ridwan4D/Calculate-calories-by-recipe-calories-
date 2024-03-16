import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Cooking from "./components/Cooking";
import Navbar from "./components/Navbar";
import Recipes from "./components/Recipes";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [cart, setSendItem] = useState([]);
  const handleWantToCook = (item) => {
    // console.log(item);
    const isExist = cart.find((findItem) => findItem.id == item.id);
    if (!isExist) {
      setSendItem([...cart, item]);
    } else {
      toast("Already Exist");
    }
  };

  const handlePreparing = (id) => {
    const newSendItem = cart.filter((item) => item.id != id);
    setSendItem(newSendItem);
  };

  return (
    <div className="p-3 md:max-w-7xl md:mx-auto">
      <Toaster position="right-top" reverseOrder={false}></Toaster>
      <header>
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      {/* recipes section */}
      <div id="recipes-section" className="mt-10 space-y-10">
        <div className="space-y-3">
          <h1 className="text-4xl font-semibold text-center">Our Recipes</h1>
          <p className="text-center text-base text-[#150B2B99]">
            Welcome to our delectable Recipes Section, where culinary
            inspiration knows no bounds! Whether you're a seasoned chef looking
            for new challenges or a novice cook eager to explore the world of
            flavors, our diverse collection of recipes caters to all tastes,
            preferences, and skill levels.
          </p>
        </div>
        <div className="md:flex md:flex-row-reverse  gap-5 space-y-5">
          <Cooking handlePreparing={handlePreparing} sendItem={cart}></Cooking>
          <Recipes handleWantToCook={handleWantToCook}></Recipes>
        </div>
      </div>
    </div>
  );
}

export default App;
