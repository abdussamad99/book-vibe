import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/book.ico";

const Navbar = () => {
  return (
    <nav className="container mx-auto py-4 px-4 md:px-0">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
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
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li><Link href="/books">Books</Link></li>
              <li><Link href="/listed-books">Listed Books</Link></li>
              <li><Link href="/pages-to-read">Pages to Read</Link></li>
            </ul>
          </div>

          <div className="flex items-center gap-2">
            <Image src={logo} alt="Logo" width={40} height={40} />
            <h1 className="font-bold text-lg">Book Vibe</h1>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="/books">Books</Link></li>
            <li><Link href="/listed-books">Listed Books</Link></li>
            <li><Link href="/pages-to-read">Pages to Read</Link></li>
          </ul>
        </div>

        <div className="navbar-end gap-2">
          <button className="btn bg-[#23BE0A] text-white hover:bg-[#1da800]">
            Sign In
          </button>
          <button className="btn bg-[#59C6D2] text-white hover:bg-[#4aa1a9]">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;