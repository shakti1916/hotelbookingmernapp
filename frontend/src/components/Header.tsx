import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutBtn from "./SignOutBtn";

const Header = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <div className="bg-blue-800 py-6">
      <div className="pr-20 pl-20  flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">Mern Booking</Link>
        </span>
        <span className="flex space-x-2">
          {isLoggedIn ? (
            <>
              <Link
                to="/my-booking"
                className="bg-white md:px-3 px-5 font-bold text-blue-600 hover:bg-gray-100 flex items-center hover:text-green-500 "
              >
                My Bookings
              </Link>
              <Link
                to="/my-booking"
                className="bg-white md:px-3 px-5 font-bold text-blue-600 hover:bg-gray-100 flex items-center hover:text-green-500 "
              >
                My Hotels
              </Link>
              <SignOutBtn/>
             
            </>
          ) : (
            <Link
              to="/sign-in"
              className="bg-white md:px-3 px-5 font-bold text-blue-600 hover:bg-gray-100 flex items-center hover:text-green-500 "
            >
              Sign In
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
