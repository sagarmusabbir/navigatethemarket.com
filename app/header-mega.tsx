import type { FC } from "react";
import { Navbar, Dropdown, Label, TextInput, DarkThemeToggle } from "flowbite-react";

const DefaultHeaderSection: FC = function () {
  return ( 
    <header className="shadow-md">
        <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
            {/* logo */}
            <a href="#">
              <span className="self-center font-primary text-lg font-bold whitespace-nowrap dark:text-white">
                navigate<span className="font-normal">the</span>market.com
                <span className="text-xs font-normal">™</span>
              </span>
            </a>
            {/* logo */}
            <div className="flex items-center">
              <button
                type="button"
                data-dropdown-toggle="language-dropdown"
                className="inline-flex items-center text-gray-900 dark:text-gray-300 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 lg:px-4 py-2 lg:py-2.5 mr-2 md:mr-3 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                <svg
                  className="w-5 h-5 rounded-full md:mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 3900 3900"
                >
                  <path fill="#b22234" d="M0 0h7410v3900H0z" />
                  <path
                    d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                    stroke="#fff"
                    strokeWidth={300}
                  />
                  <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
                  <g fill="#fff">
                    <g id="d">
                      <g id="c">
                        <g id="e">
                          <g id="b">
                            <path
                              id="a"
                              d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                            />
                            <use xlinkHref="#a" y={420} />
                            <use xlinkHref="#a" y={840} />
                            <use xlinkHref="#a" y={1260} />
                          </g>
                          <use xlinkHref="#a" y={1680} />
                        </g>
                        <use xlinkHref="#b" x={247} y={210} />
                      </g>
                      <use xlinkHref="#c" x={494} />
                    </g>
                    <use xlinkHref="#d" x={988} />
                    <use xlinkHref="#c" x={1976} />
                    <use xlinkHref="#e" x={2470} />
                  </g>
                </svg>
                <span className="hidden mr-2 md:inline">English</span>
                <svg
                  className="hidden w-4 h-4 md:inline"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {/* Dropdown */}
              <div
                className="hidden z-50 my-4 w-48 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                id="language-dropdown"
              >
                <ul className="py-1" role="none">
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      <div className="inline-flex items-center">
                        <svg
                          className="h-3.5 w-3.5 rounded-full mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          id="flag-icon-css-us"
                          viewBox="0 0 512 512"
                        >
                          <g fillRule="evenodd">
                            <g strokeWidth="1pt">
                              <path
                                fill="#bd3d44"
                                d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                transform="scale(3.9385)"
                              />
                              <path
                                fill="#fff"
                                d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                transform="scale(3.9385)"
                              />
                            </g>
                            <path
                              fill="#192f5d"
                              d="M0 0h98.8v70H0z"
                              transform="scale(3.9385)"
                            />
                            <path
                              fill="#fff"
                              d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                              transform="scale(3.9385)"
                            />
                          </g>
                        </svg>
                        English (US)
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      <div className="inline-flex items-center">
                        <svg
                          className="h-3.5 w-3.5 rounded-full mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          id="flag-icon-css-de"
                          viewBox="0 0 512 512"
                        >
                          <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                          <path d="M0 0h512v170.7H0z" />
                          <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                        </svg>
                        Deutsch
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      <div className="inline-flex items-center">
                        <svg
                          className="h-3.5 w-3.5 rounded-full mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          id="flag-icon-css-it"
                          viewBox="0 0 512 512"
                        >
                          <g fillRule="evenodd" strokeWidth="1pt">
                            <path fill="#fff" d="M0 0h512v512H0z" />
                            <path fill="#009246" d="M0 0h170.7v512H0z" />
                            <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
                          </g>
                        </svg>
                        Italiano
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      <div className="inline-flex items-center">
                        <svg
                          className="h-3.5 w-3.5 rounded-full mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          id="flag-icon-css-cn"
                          viewBox="0 0 512 512"
                        >
                          <defs>
                            <path
                              id="a"
                              fill="#ffde00"
                              d="M1-.3L-.7.8 0-1 .6.8-1-.3z"
                            />
                          </defs>
                          <path fill="#de2910" d="M0 0h512v512H0z" />
                          <use
                            width={30}
                            height={20}
                            transform="matrix(76.8 0 0 76.8 128 128)"
                            xlinkHref="#a"
                          />
                          <use
                            width={30}
                            height={20}
                            transform="rotate(-121 142.6 -47) scale(25.5827)"
                            xlinkHref="#a"
                          />
                          <use
                            width={30}
                            height={20}
                            transform="rotate(-98.1 198 -82) scale(25.6)"
                            xlinkHref="#a"
                          />
                          <use
                            width={30}
                            height={20}
                            transform="rotate(-74 272.4 -114) scale(25.6137)"
                            xlinkHref="#a"
                          />
                          <use
                            width={30}
                            height={20}
                            transform="matrix(16 -19.968 19.968 16 256 230.4)"
                            xlinkHref="#a"
                          />
                        </svg>
                        中文 (繁體)
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              
              {/* <button
                id="theme-toggle"
                type="button"
                className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
              >
               
                <svg
                  id="theme-toggle-dark-icon"
                  className="hidden w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
                <svg
                  id="theme-toggle-light-icon"
                  className="hidden w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              </button> */}
              <DarkThemeToggle className="size-fit p-2 focus:ring-0 rounded-lg text-sm font-medium" />
              <span className="mr-0 ml-2 w-px h-5 bg-gray-200 dark:bg-gray-600 lg:inline lg:mr-3 lg:ml-5" />
              <a
                href="#"
                className="inline-flex items-center p-2 text-sm font-medium text-gray-500 rounded-lg dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center p-2 text-sm font-medium text-gray-500 rounded-lg dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center p-2 text-sm font-medium text-gray-500 rounded-lg dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center p-2 text-sm font-medium text-gray-500 rounded-lg dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                </svg>
              </a>
            </div>
          </div>
        </nav>
        <nav className="bg-white border-gray-200 dark:bg-gray-700 dark:border-gray-600 border-y">
          <div className="grid py-4 px-4 mx-auto max-w-screen-xl lg:grid-cols-2 md:px-6">
            <form className="flex mb-4 lg:order-2 lg:mb-0">
              <label
                htmlFor="search-dropdown"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
              >
                Your Email
              </label>
              <button
                id="dropdown-button"
                data-dropdown-toggle="dropdown"
                className="hidden md:inline-flex flex-shrink-0 z-10 items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-200 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                type="button"
              >
                All categories{" "}
                <svg
                  className="ml-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                id="dropdown"
                className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                data-popper-reference-hidden=""
                data-popper-escaped=""
                data-popper-placement="top"
                style={{
                  position: "absolute",
                  inset: "auto auto 0px 0px",
                  margin: 0,
                  transform: "translate3d(897px, 5637px, 0px)"
                }}
              >
                <ul
                  className="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdown-button"
                >
                  <li>
                    <button
                      type="button"
                      className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Mockups
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Templates
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Design
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Logos
                    </button>
                  </li>
                </ul>
              </div>
              <div className="relative w-full">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg md:rounded-l-none md:border-l-gray-50 border-l-1 md:border-l-6 border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:border-l-gray-600  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-primary-500"
                  placeholder="Search anything..."
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-primary-700 rounded-r-lg border border-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </form>
            <div className="flex items-center lg:order-1">
              <ul className="flex flex-row mt-0 space-x-8 text-sm font-medium">
                <li>
                  <button
                    id="dropdown-button-megamenu"
                    data-dropdown-toggle="megamenu"
                    data-dropdown-trigger="hover"
                    className="flex justify-between items-center w-full font-medium dark:hover:text-primary-500 md:p-0 md:w-auto dark:text-white hover:text-primary-500 dark:focus:text-primary-500"
                  >
                    Personal
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </li>
                <li>
                  <button
                    id="dropdown-button-megamenu"
                    data-dropdown-toggle="megamenu2"
                    data-dropdown-trigger="hover"
                    className="flex justify-between items-center w-full font-medium dark:hover:text-primary-500 md:p-0 md:w-auto dark:text-white hover:text-primary-500 dark:focus:text-primary-500"
                  >
                    Business
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <nav
          id="megamenu"
          className="bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-600 w-full"
        >
          <div className="grid py-4 px-4 mx-auto max-w-screen-xl text-gray-900 dark:text-white md:grid-cols-2 lg:grid-cols-4 md:px-6">
            <ul className="col-span-2 md:col-span-1">
              <li className="flex p-3">
                <svg
                  className="mr-2 w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <div className="font-semibold">
                    <a href="#" className="hover:text-primary-400">
                      Home Improvements
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <a href="#" className="hover:text-primary-400">
                      Utilities
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <a href="#" className="hover:text-primary-400">
                      New Boilers
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <a href="#" className="hover:text-primary-400">
                      Heat Pumps
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <a href="#" className="hover:text-primary-400">
                      Heating Oil
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <a href="#" className="hover:text-primary-400">
                      Solar
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <a href="#" className="hover:text-primary-400">
                      Double Glazing
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <a href="#" className="hover:text-primary-400">
                      Insulation
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <a href="#" className="hover:text-primary-400">
                      Conservatories
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <a href="#" className="hover:text-primary-400">
                      Alarm Systems
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <a href="#" className="hover:text-primary-400">
                      Driveways
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex p-3">
                <svg
                  className="mr-2 w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <div className="font-semibold">
                    <a href="#" className="hover:text-primary-400">
                      Motoring
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <a href="#" className="hover:text-primary-400">
                      Buy
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <a href="#" className="hover:text-primary-400">
                      Sell
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <a href="#" className="hover:text-primary-400 ">
                      Maintain
                    </a>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="col-span-2 md:col-span-1">
              <li className="flex p-3">
                <svg
                  className="mr-2 w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <div className="font-semibold">
                    <a href="#" className="hover:text-primary-400">
                      Moving Home
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <a href="#" className="hover:text-primary-400">
                      Utilities
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <a href="#" className="hover:text-primary-400">
                      Conveyancing
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <a href="#" className="hover:text-primary-400">
                      Surveying
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <a href="#" className="hover:text-primary-400">
                      House Removals
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <a href="#" className="hover:text-primary-400">
                      Storage
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex p-3">
                <svg
                  className="mr-2 w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <div className="font-semibold">
                    <a href="#" className="hover:text-primary-400">
                      Health &amp; Beauty
                    </a>
                  </div>
                  <div>
                    <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      <a href="#" className="hover:text-primary-400">
                        Dental Implants
                      </a>
                    </div>
                    <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      <a href="#" className="hover:text-primary-400  ">
                        Dental Vaneers
                      </a>
                    </div>
                    <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      <a href="#" className="hover:text-primary-400">
                        Invisalign
                      </a>
                    </div>
                    <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      <a href="#" className="hover:text-primary-400">
                        Lasik
                      </a>
                    </div>
                    <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      <a href="#" className="hover:text-primary-400">
                        Cataracts Surgery
                      </a>
                    </div>
                    <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      <a href="#" className="hover:text-primary-400">
                        Hearing Aid
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="hidden lg:block">
              <li className="flex p-3">
                <svg
                  className="mr-2 w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <div className="font-semibold">
                    <a href="#" className="hover:text-primary-400">
                      Financial Claims
                    </a>
                  </div>
                  <div>
                    <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      <a href="#" className="hover:text-primary-400">
                        Personal contrac purchase (PCP)
                      </a>
                    </div>
                    <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      <a href="#" className="hover:text-primary-400">
                        Payment Protection Insurance (PPI)
                      </a>
                    </div>
                    <div className="text-sm font-normal  text-gray-500 dark:text-gray-400">
                      <a href="#" className="hover:text-primary-400">
                        Packaged Bank Account (PBA)
                      </a>
                    </div>
                    <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      <a href="#" className="hover:text-primary-400">
                        Housing Disrepair
                      </a>
                    </div>
                    <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      <a href="#" className="hover:text-primary-400">
                        Flight Delays
                      </a>
                    </div>
                    <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      <a href="#" className="hover:text-primary-400">
                        Diesel Emissions
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="flex p-3">
                <svg
                  className="mr-2 w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <div className="font-semibold">
                    <a href="#" className="hover:text-primary-400">
                      Tax
                    </a>
                  </div>
                  <div>
                    <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      <a href="#" className="hover:text-primary-400">
                        Self-Assessment
                      </a>
                    </div>
                    <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      <a href="#" className="hover:text-primary-400">
                        Stamp Duty Relief
                      </a>
                    </div>
                    <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      <a href="#" className="hover:text-primary-400">
                        Marriage Allowance
                      </a>
                    </div>
                    <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      <a href="#" className="hover:text-primary-400">
                        Work From Home
                      </a>
                    </div>
                    <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      <a href="#" className="hover:text-primary-400">
                        Uniform Allowance
                      </a>
                    </div>
                    <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      <a href="#" className="hover:text-primary-400">
                        Mileage Allowance
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div className="col-span-2 p-4 lg:col-span-1">
              <h2 className="font-semibold text-gray-900 dark:text-white">Deals</h2>
              <p className="font-light text-md text-gray-500 dark:text-gray-400">
                Connecting your brand to our customers
              </p>
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-600 dark:text-primary-500 dark:hover:text-primary-400"
              >
                Explore deals{" "}
                <svg
                  className="ml-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </nav>
        <nav
          id="megamenu2"
          className="bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-600 w-full"
        >
          <div className="grid py-4 px-4 mx-auto max-w-screen-xl text-gray-900 dark:text-white md:grid-cols-2 lg:grid-cols-4 md:px-6">
            <ul className="col-span-2 md:col-span-1">
              <li className="flex p-3">
                <svg
                  className="mr-2 w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <div className="font-semibold">
                    <a href="#" className="hover:text-primary-400">
                      Utilities
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <a href="#" className="hover:text-primary-400">
                      Commercial Waste
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <a href="#" className="hover:text-primary-400">
                      Business Energy
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <a href="#" className="hover:text-primary-400">
                      Leased Lines
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex p-3">
                <svg
                  className="mr-2 w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <div className="font-semibold">
                    <a href="#" className="hover:text-primary-400">
                      Payments
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <a href="#" className="hover:text-primary-400">
                      Epos
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <a href="#" className="hover:text-primary-400">
                      Merchant Accounts
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex p-3">
                <svg
                  className="mr-2 w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <div className="font-semibold">
                    <a href="#" className="hover:text-primary-400">
                      Vehicle
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <a href="#" className="hover:text-primary-400">
                      Fuel Cards
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <a href="#" className="hover:text-primary-400">
                      Vehicle Tracking
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <a href="#" className="hover:text-primary-400 ">
                      Dash Cams
                    </a>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="col-span-2 md:col-span-1">
              <li className="flex p-3">
                <svg
                  className="mr-2 w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <div className="font-semibold">
                    <a href="#" className="hover:text-primary-400">
                      Office
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <a href="#" className="hover:text-primary-400">
                      Office Space
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <a href="#" className="hover:text-primary-400  ">
                      Photocopiers
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <a href="#" className="hover:text-primary-400">
                      Franking Machines
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <a href="#" className="hover:text-primary-400">
                      Coffee Machines
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <a href="#" className="hover:text-primary-400">
                      Telephone Systems{" "}
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <a href="#" className="hover:text-primary-400">
                      Business Security Systems
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex p-3">
                <svg
                  className="mr-2 w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <div className="font-semibold">
                    <a href="#" className="hover:text-primary-400">
                      Media
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <a href="#" className="hover:text-primary-400  ">
                      Out of Home
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <a href="#" className="hover:text-primary-400">
                      Online
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400 ">
                    <a href="#" className="hover:text-primary-400">
                      Bulk Email
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400 pb-1.5">
                    <a href="#" className="hover:text-primary-400">
                      Bulk SMS
                    </a>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="hidden lg:block">
              <li className="flex p-3">
                <svg
                  className="mr-2 w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <div className="font-semibold">
                    <a href="#" className="hover:text-primary-400">
                      FInance
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <a href="#" className="hover:text-primary-400">
                      Accounting
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <a href="#" className="hover:text-primary-400">
                      Payroll
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <a href="#" className="hover:text-primary-400">
                      Invoice Factoring
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <a href="#" className="hover:text-primary-400">
                      Collections
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex p-3">
                <svg
                  className="mr-2 w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <div className="font-semibold">
                    <a href="#" className="hover:text-primary-400">
                      Software
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <a href="#" className="hover:text-primary-400">
                      CRM
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <a href="#" className="hover:text-primary-400">
                      Phone
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <a href="#" className="hover:text-primary-400">
                      Time &amp; Attendance
                    </a>
                  </div>
                  <a href="#" className="hover:text-primary-400"></a>
                </div>
                <a href="#" className="hover:text-primary-400"></a>
              </li>
              <a href="#" className="hover:text-primary-400"></a>
              <li className="flex p-3">
                <a href="#" className="hover:text-primary-400">
                  <svg
                    className="mr-2 w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <div>
                  <a href="#" className="hover:text-primary-400"></a>
                  <div className="font-semibold">
                    <a href="#" className="hover:text-primary-400" />
                    <a href="#" className="hover:text-primary-400">
                      Reclaim
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <a href="#" className="hover:text-primary-400">
                      Business Rates
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <a href="#" className="hover:text-primary-400">
                      Business Energy Claims
                    </a>
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <a href="#" className="hover:text-primary-400">
                      R&amp;D
                    </a>
                  </div>
                  <a href="#" className="hover:text-primary-400"></a>
                </div>
                <a href="#" className="hover:text-primary-400"></a>
              </li>
              <a href="#" className="hover:text-primary-400"></a>
            </ul>
            <a href="#" className="hover:text-primary-400"></a>
            <div className="col-span-2 p-4 lg:col-span-1">
              <a href="#" className="hover:text-primary-400">
                <h2 className="font-semibold text-gray-900 dark:text-white">Deals</h2>
                <p className="font-light text-md text-gray-500 dark:text-gray-400">
                  Connecting your brand to our customers
                </p>
              </a>
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-600 dark:text-primary-500 dark:hover:text-primary-400"
              >
                Explore deals{" "}
                <svg
                  className="ml-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </nav>
      </header>
      
 ) 
};

export default DefaultHeaderSection;