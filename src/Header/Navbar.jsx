import { NavLink } from "react-router-dom";
import logoPng from "../assets/images/logo.png";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/news">News</NavLink>
      </li>
      <li>
        <NavLink to="/destination">Destination</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start ">
          <img className="w-32" src={logoPng} alt="logo" />
        </div>
        <div className="navbar-center lg:w-[80%] justify-evenly ">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered mr-10 w-full md:w-[350px]"
          />
          <ul className="menu  menu-horizontal px-1 hidden lg:flex ">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn hidden lg:flex px-7 py-3 normal-case bg-[#F9A51A] hover:bg-[#9c7944]">
            Login
          </a>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
              <a className="ml-2">Login</a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
