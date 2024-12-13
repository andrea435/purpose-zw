import { RiSearch2Line } from "react-icons/ri";
import React, { useState } from "react";

const Navbar = () => {
  return (
    <div className=" bg-teal-950">
      <div className="navbar z-50 max-w-6xl mx-auto text-white bg-teal-950">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content bg-teal-950/50 backdrop-blur-md rounded-box z-[1] mt-3 min-w-max p-2 shadow"
            >
              <li>
                <a>About</a>
                <ul className="p-2">
                  <li>
                    <a href="/about-us">About Us</a>
                  </li>
                  <li>
                    <a href="/vunani">Vunani</a>
                  </li>
                  <li>
                    <a href="/our-team">Our Team</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/services">Products & Services</a>
              </li>
              <li>
                <a href="/investment-process">Investment Process</a>
              </li>
              <li>
                <a href="/prices">Perfomance</a>
              </li>
              <li>
                <a href="/forms">Forms</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <a href="/" className="btn btn-ghost text-xl">
            <img src="/logo_a.png" className="w-[160px]" alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu z-50 menu-horizontal px-1">
            <li className="hover:bg-teal-600/20  rounded-none ease-in-out transition duration-200">
              <details>
                <summary>About</summary>
                <ul className="p-2 w-[200px]  text-black border">
                  <li>
                    <a
                      href="/about-us"
                      className="hover:text-teal-100 hover:bg-teal-950"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/vunani"
                      className="hover:text-teal-100 hover:bg-teal-950"
                    >
                      Vunani
                    </a>
                  </li>
                  <li>
                    <a
                      href="/our-team"
                      className="hover:text-teal-100 hover:bg-teal-950"
                    >
                      Our Team
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a
                href="/services"
                className="hover:bg-teal-600/20  rounded-none ease-in-out transition duration-200"
              >
                Products & Services
              </a>
            </li>
            <li>
              <a
                href="/investment-process"
                className="hover:bg-teal-600/20  rounded-none ease-in-out transition duration-200"
              >
                Investment Process
              </a>
            </li>
            <li>
              <a
                href="/prices"
                className="hover:bg-teal-600/20  rounded-none ease-in-out transition duration-200"
              >
                Perfomance
              </a>
            </li>
            <li>
              <a
                href="/forms"
                className="hover:bg-teal-600/20  rounded-none ease-in-out transition duration-200"
              >
                Forms
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-1">
          <a
            href="/contact"
            className="btn btn-sm rounded-none btn-outline text-teal-100 hover:bg-amber-700 hidden md:flex "
          >
            Contact
          </a>
          {/* Search Icon */}
          <a
            href="/search"
            className="btn btn-sm rounded-none btn-outline text-teal-100 hover:bg-amber-700"
          >
            <RiSearch2Line />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
