import React, { useState } from 'react';
import image from '../assets/images/download.png';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <section className="tagline bg-slate-900">
      <div className="container relative">
        <div className="grid grid-cols-1">
          <div className="text-center">
            <h6 className="text-white font-medium">
              Refer a friend &amp; get $50 in credits each 🎉
            </h6>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="" src={image} alt="Workflow" />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4 relative">
                  <ul className="flex space-x-4">
                    {/* HERO dropdown */}
                    <li className="relative">
                      <button
                        onClick={toggleDropdown}
                        className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Hero
                      </button>
                      {isDropdownOpen && (
                        <ul className="absolute top-full left-0 mt-2 w-40 bg-white border rounded shadow-lg z-10">
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Option 1
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Option 2
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Option 3
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Option 4
                            </a>
                          </li>
                        </ul>
                      )}
                    </li>

                    {/* Other menu items */}
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Profile
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Sale
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
