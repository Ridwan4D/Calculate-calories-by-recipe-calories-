const Navbar = () => {
  return (
    <div>
      <div className="md:navbar flex flex-col md:flex-row items-center bg-base-100">
        <div className="flex flex-row md:w-8/12">
          <div className="md:navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#recipes-section">Recipes</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Search</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl md:text-3xl font-bold">
              Recipe Calories
            </a>
          </div>
          <div className="md:navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-base text-[#150B2BB3]">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#recipes-section">Recipes</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Search</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:navbar-end md:space-x-3 flex items-center justify-center  md:w-4/12">
          <label className="input input-bordered flex items-center gap-2 w-8/12 h-[40px] md:w-2/4 md:h-[50px] mr-2">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" className="grow" placeholder="Search" />
          </label>
          <button className="btn rounded-full btn-bg">
            <i className="fa-solid fa-user-plus btn-text md:border-2 border-[#150B2B] rounded-full md:p-1"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
