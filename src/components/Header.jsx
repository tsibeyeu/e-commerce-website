import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../features/user/userSlice";
import { clearCart } from "../features/cart/cartSlice";

const Header = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
    dispatch(logoutUser());
    dispatch(clearCart());
  };
  return (
    <header className="bg-neutral py-2  text-neutral-content">
      <div className="align-element flex justify-center sm:justify-end ">
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm capitalize">Hello, {user.username}</p>
            <button
              onClick={handleLogout}
              className="btn btn-xs btn-outline btn-primary capitalize"
            >
              logout
            </button>
          </div>
        ) : (
          <div className="flex justify-center gap-x-6 items-center">
            <Link to="/login" className="link link-hover text-xs sm:text-sm">
              Sign in/Guest
            </Link>
            <Link to="/register" className="link link-hover text-xs sm:text-sm">
              Create Account
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
