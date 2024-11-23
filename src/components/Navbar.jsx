import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-base-200">
      <div className="align-element navbar">
        <div className="navbar-start menu menu-horizontal">
          <NavLink
            to="/"
            className=" hidden lg:flex align-element text-3xl items-center btn btn-outline"
          >
            T
          </NavLink>
          <div className="dropdown">
            <label className="btn-ghost btn lg:hidden" tabIndex={0}>
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul className=" bg-base-200 menu menu-sm dropdown-content w-52 p-2 mt-3 rounded-box shadow z-[1]">
              drop down
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">nav link</ul>
        </div>
        <div className="navbar-end">
          <NavLink to="/cart" className="btn btn-circle btn-ghost ml-4 btn-md">
            <div className="indicator">
                <BsCart3 className="h-6 w-6"/>
                <span className="badge badge-primary badge-sm indicator-item">8</span>

            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
