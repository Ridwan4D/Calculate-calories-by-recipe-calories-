// import banner from '../assets/banner-bg.jpeg'
const Banner = () => {
  return (
    <div className="bg_div h-[70vh] rounded-3xl mt-6 md:mt-10">
      <h1 className="text-center font-bold text-3xl md:text-5xl text-white pt-10 md:pt-28 md:px-36">
        Discover an exceptional cooking class tailored for you!
      </h1>
      <p className="text-center text-sm md:text-base text-white pt-5 md:pt-7 px-2 md:px-24">
        Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
        Database and solve 500+ coding problems to become an exceptionally well
        world-class Programmer.
      </p>
      <div className="text-center mt-10 space-x-2 md:space-x-5 text-sm md:text-xl font-semibold">
        <button className="btn rounded-full btn-bg btn-text border-0">Explore Now</button>
        <button className="btn rounded-full bg-transparent text-white">Our Feedback</button>
      </div>
    </div>
  );
};

export default Banner;
