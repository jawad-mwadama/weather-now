import React from "react";
import logo from "../../assets/images/logo.svg";
import iconUnits from "../../assets/images/icon-units.svg";

function Navbar() {
  return (
    <nav className="p-7">
      <div className="flex justify-between py-5">
        {/* logo */}
        <img src={logo} alt="logo" />

        {/* units */}
        <div className="flex items-center gap-2 rounded-lg bg-neutral-700 px-4 py-2 font-body text-white">
          <img src={iconUnits} alt="" />
          <span>units</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
