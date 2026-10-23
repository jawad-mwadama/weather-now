import logo from "../../assets/images/logo.svg";
import iconUnits from "../../assets/images/icon-units.svg";
import iconDropdown from "../../assets/images/icon-dropdown.svg";

function Navbar() {
  return (
    <nav className="p-7">
      <div className="flex justify-between py-1">
        {/* logo */}
        <img src={logo} alt="logo" />

        {/* units */}
        <div className="hover flex cursor-pointer items-center gap-2 rounded-lg bg-neutral-700 px-4 py-2 font-body text-white">
          <img src={iconUnits} alt="icon units" />
          <span>units</span>
          <img src={iconDropdown} alt="icon dropdown" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
