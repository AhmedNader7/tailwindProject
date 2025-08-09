import { Link } from "react-router-dom";
import React, { useState } from "react";

function Nav() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleBrandClick = () => {
    setActiveIndex(null);
  };

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <nav className="bg-gray-800 border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        {/* Logo / Brand */}
        <Link
          to="/"
          className="flex items-center space-x-3 cursor-pointer"
          onClick={handleBrandClick}
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white uppercase">
            Start Framework
          </span>
        </Link>

        {/* Menu Items */}
        <div className="w-full md:block md:w-auto">
          <ul
            className="font-medium flex flex-col p-4 md:p-0 mt-4 
                       border border-gray-100 rounded-lg bg-gray-50 
                       md:flex-row md:space-x-8 md:mt-0 md:border-0 
                       md:bg-transparent dark:bg-gray-800 
                       md:dark:bg-transparent dark:border-gray-700"
          >
            {["About", "Portfolio", "Contact"].map((item, index) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className={`block py-2 px-3 rounded-md transition-colors duration-200 ${
                    activeIndex === index
                      ? "bg-teal-500 text-white"
                      : "text-white hover:text-teal-400"
                  }`}
                  onClick={() => handleItemClick(index)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;