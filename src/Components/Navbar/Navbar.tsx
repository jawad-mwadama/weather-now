import React from "react";
import logo from "../../assets/images/logo.svg";

function Navbar() {
  return (
    <nav className="p-7">
      <div className="flex justify-between py-5">
        {/* logo */}
        <img src={logo} alt="logo" />

        {/* units */}
        <div className="font-body text-white">
          <select className="rounded-lg bg-blue-500" name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
