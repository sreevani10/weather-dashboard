import { SearchBox } from "@mapbox/search-js-react";
import { useState } from "react";
import "../styles/Navbar.css";

const Navbar = ({ setLocation, setAddress }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (input) => {
    setInputValue(input);
  };

  const handleRetrieve = (input) => {
    setLocation(input?.features[0].properties?.coordinates);
    setAddress(input?.features[0].properties?.full_address);
  };
  return (
    <div className="container">
      <SearchBox
        accessToken="API_KEY"
        options={{
          language: "en",
          country: "IND",
        }}
        value={inputValue}
        onChange={(d) => {
          handleChange(d);
        }}
        onRetrieve={(res) => {
          handleRetrieve(res);
        }}
      />
    </div>
  );
};

export default Navbar;
