import "../styles/Navbar.css";
import { SearchBox } from "@mapbox/search-js-react";
import { useState } from "react";

const Navbar = ({ setLocation, setAddress }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (input) => {
    console.log("handleCange:", input);
    setInputValue(input);
  };

  const handleRetrive = (input) => {
    console.log("retrived:", input);
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
          handleRetrive(res);
        }}
      />
    </div>
  );
};

export default Navbar;
