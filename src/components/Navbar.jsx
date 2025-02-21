import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Navlinks from "./NavLinks";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/user/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  function handleTheme() {
    dispatch(toggleTheme());
  }

  const numItemInCart = useSelector((state) => state.cart.numItemsInCart);
  return (
    <nav className="bg-base-200">
       <div className='navbar align-element'>
        <div className='navbar-start'>
          {/* TITLE */}
          <NavLink
            to='/'
            className='hidden lg:flex btn btn-primary text-3xl items-center'
          >
            C
          </NavLink>
          <div className="dropdown">
            <label className="btn-ghost btn lg:hidden" tabIndex={0}>
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul className=" bg-base-200 menu menu-sm dropdown-content w-52 p-2 mt-3 rounded-box shadow z-[1]">
              <Navlinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <Navlinks />
          </ul>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleTheme} />
            <BsSunFill className="swap-on h-4 w-4" />
            <BsMoonFill className="swap-off h-4 w-4" />
          </label>
          <NavLink to="/cart" className="btn btn-circle btn-ghost ml-4 btn-md">
            <div className="indicator">
              <BsCart3 className="h-6 w-6" />
              <span className="badge badge-primary badge-sm indicator-item">
                {numItemInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
