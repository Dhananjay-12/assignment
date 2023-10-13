import { Link } from "react-router-dom";
import Button from "./Button";
import { IoIosArrowDown } from "react-icons/io";

function Navbar() {
  return (
    <nav className="fixed bg-white/50 p-4 w-full z-10">
      <div className="flex items-center justify-between px-12">
        <div className="flex items-center space-x-12">
          <Link to="/" className="text-2xl font-bold hover:text-gray-300">
            LOGO
          </Link>
          <Link
            to="/solutions"
            className="hover:text-gray-300 font-semibold flex items-center justify-center gap-2"
          >
            Solutions
            <span className="text-blue-300">
              <IoIosArrowDown />
            </span>
          </Link>
          <Link
            to="/features"
            className="hover:text-gray-300 font-semibold flex items-center justify-center gap-2"
          >
            Features
            <span className="text-blue-300">
              <IoIosArrowDown />
            </span>
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-300 font-semibold flex items-center justify-center gap-2"
          >
            About
            <span className="text-blue-300">
              <IoIosArrowDown />
            </span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Button>Login</Button>
          <Button type="blue">Register</Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
