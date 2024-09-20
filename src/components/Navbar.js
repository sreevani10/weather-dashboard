import { IoSearch } from "react-icons/io5";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <div className="input-wrapper">
        <IoSearch />
        <input type="text" placeholder="Search here" className="inputBox" />
      </div>
    </div>
  );
};

export default Navbar;
