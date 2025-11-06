import { useEffect, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode, MdOutlineMenu } from "react-icons/md";
import { SiStudyverse } from "react-icons/si";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openDropDownMenu, setDropDownMenu] = useState(true);
  const [lightMode, setLightMode] = useState(true);


  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setLightMode(false);
      document.documentElement.classList.add("dark");
    } else {
      setLightMode(true);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDropDownMenu = () => {
    setDropDownMenu(!openDropDownMenu);
  };

  const themeToggle = () => {
    const html = document.documentElement;
    const newMode = !lightMode;
    setLightMode(newMode);

    if (newMode) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-20 flex items-center bg-background/70 backdrop-blur-sm">
      <div className="flex flex-col p-3 gap-3 w-full items-center">
        <div className="max-w-6xl w-full flex justify-between items-center">
          

          <div className="flex gap-2 items-center text-2xl  font-semibold text-accent">
            <SiStudyverse  />
            <Link to="/">
              <h2>StudyVault</h2>
            </Link>
          </div>

          {/* Second Section MD screen */}
          <div className="flex font-semibold text-foreground justify-between gap-2 lg:hidden text-2xl">
            {lightMode ? (
              <MdOutlineDarkMode id="theme-toggle" onClick={themeToggle} />
            ) : (
              <MdOutlineLightMode id="theme-toggle" onClick={themeToggle} />
            )}
            <MdOutlineMenu onClick={toggleDropDownMenu} />
          </div>
          
          {/* Large screen menu section */}
          <div className="hidden lg:flex">
            <ul className="flex justify-between text-base font-normal font-sans text-foreground gap-4 items-center">
              <li><button className="text-foreground hover:text-accent cursor-pointer">How to Use</button></li>
              <li><button className="text-foreground  hover:text-accent  cursor-pointer">Dashboard</button></li>
            </ul>
          </div>

          {/* Large Screen Second Section */}
          <div className="hidden lg:flex text-2xl gap-4 items-center ">
            {lightMode ? (
              <MdOutlineDarkMode className="cursor-pointer" id="theme-toggle" onClick={themeToggle} />
            ) : (
              <MdOutlineLightMode className="cursor-pointer" id="theme-toggle" onClick={themeToggle} />
            )}
            <button className="hidden hover:text-accent-text hover:bg-accent-hover cursor-pointer  text-sm px-4 py-1 rounded-md text-accent-text bg-accent lg:inline">Profile</button>
          </div>
        </div>

        {/* Small Screen Menu */}
        <ul
          className={`flex text-lg transition duration-300 ease-in flex-col items-center h-0 overflow-hidden lg:hidden gap-4 ${
            openDropDownMenu ? "" : "h-full"
          }`}
        >
          <li className="text-foreground cursor-pointer">How to Use</li>
          <li className="text-foreground cursor-pointer">Dashboard</li>
          <li>
            <button className="bg-accent rounded-md text-accent-text px-4 py-2 hover:text-accent-hover hover:bg-accent-hover">
              Login
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
