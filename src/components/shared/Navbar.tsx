import Image from 'next/image';
import React from 'react';
import logo from "@/assets/book.ico";

const Navbar = () => {
  return (
    <nav className='container mx-auto py-4 px-4 md:px-0'>
      <div className="navbar bg-base-100 shadow-sm ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><a>Home</a></li>
              <li>
                <a>Listed Books</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Pages to Read</a></li>
            </ul>
          </div>
          < div className='flex items-center gap-2'>
            <Image src={logo} alt="Logo" />
            <h1 className='font-bold text-lg'>Book Vibe</h1>

          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li>
              <details>
                <summary>Listed Books</summary>
                <ul className="p-2 bg-base-100 w-40 z-1">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </details>
            </li>
            <li><a>Pages to Read</a></li>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <button className="btn bg-[#23BE0A] text-white hover:bg-[#1da800]">Sign In</button>
          <button className="btn bg-[#59C6D2] text-white hover:bg-[#4aa1a9]">Sign Up</button>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;