import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import logo from './asset/Logo.svg';
import { HiDownload } from "react-icons/hi";
import Resume from "./asset/sathish_kumar_ravi.pdf"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Replaced Link with img wrapped in a div */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer">
            <ScrollLink to="home" smooth={true} offset={0} duration={500}>
              <img className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white" src={logo} alt="logo" />
            </ScrollLink>
          </div>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => {
                const link = document.createElement("a");
                link.href = Resume;  // Directly use the file path here
                link.download = "Sathish_Kumar_Ravi.pdf";  // Name of the downloaded file
                link.click();
              }}
            >


              <HiDownload className="w-[22px] h-[22px] pr-1" />
              Resume
            </button>

            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`absolute top-[74px] left-0 w-full bg-black h-[100vh]  backdrop-blur-sm bg-black/90  w:bg-gray-900 flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? 'opacity-90' : 'opacity-0 pointer-events-none'
              } md:hidden`}
            style={{ transition: 'transform 0.3s ease, opacity 0.3s ease' }}
          >
            {['Home', 'Projects', 'Experience', 'Education', 'Contact'].map((item, index) => (
              <ScrollLink
                key={index}
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="block w-full text-center text-white p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </ScrollLink>
            ))}
          </div>

          {/* Desktop Menu */}
          <div className="hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {['Home', 'Projects', 'Experience', 'Education', 'Contact'].map((item, index) => (
                <li key={index}>
                  <ScrollLink
                    to={item.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {item}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
