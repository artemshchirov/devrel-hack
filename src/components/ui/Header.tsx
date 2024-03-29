import { FC, useState } from "react";

import CustomLink from "../CustomLink";

import logo from "../../assets/logo.png";

const Header: FC = () => {
  const [collapse, setCollapse] = useState<boolean>(true);

  const handleCollapse = () => {
    setCollapse((prevState) => !prevState);
  };

  return (
    <header className="w-full p-4 mb-5 border-gray-200 rounded-md bg-gray-50 dark:bg-gray-800 md:px-6 dark:border-gray-700">
      <div className="container flex flex-wrap items-center justify-between min-w-full">
        <a href="https://devrel-hack.vercel.app/" className="flex items-center">
          <img
            src={logo}
            className="h-6 mr-3 sm:h-10"
            alt="DevRel Hackathon Logo"
          />
          <span className="self-center text-xl font-semibold text-transparent whitespace-nowrap bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 dark:text-white">
            DevRel Hack 4 Luck
          </span>
        </a>
        <button
          onClick={handleCollapse}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-md md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${collapse ? "hidden" : ""} w-full md:block md:w-auto`}
        >
          <ul className="flex flex-col mt-4 rounded-md bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              {/* // TODO: aria-current="page" */}
              <CustomLink
                href="/"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                activeClassName="dark:text-white underline"
              >
                Home
              </CustomLink>
            </li>
            <li>
              <CustomLink
                href="/about"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                activeClassName="dark:text-white underline"
              >
                About
              </CustomLink>
            </li>
            <li>
              <CustomLink
                href="/contact"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                activeClassName="dark:text-white underline"
              >
                Contact
              </CustomLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
