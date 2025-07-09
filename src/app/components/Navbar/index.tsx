import { LuBell, LuLibrary, LuUsersRound } from "react-icons/lu";
import { HiCog8Tooth } from "react-icons/hi2";
import { GoSearch } from "react-icons/go";

import NavigationItem from "../NavigationItem";
import { BiHomeAlt2 } from "react-icons/bi";
import { TbNorthStar } from "react-icons/tb";
import { MdLockOpen } from "react-icons/md";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg ps-2">
      <div className="container-fluid">
        <div className="" style={{ width: 230 }}>
          <NavigationItem name={"My Library"} icon={LuLibrary} />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ps-3" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-5">
            <NavigationItem name={"Home"} icon={BiHomeAlt2} />
            <NavigationItem name={"Discover"} icon={TbNorthStar} />
            <NavigationItem name={"Search"} icon={GoSearch} />
          </ul>
          <div className="d-flex gap-4">
            <LuBell size={20} />
            <MdLockOpen size={20} />
            <LuUsersRound size={20} />
            <HiCog8Tooth size={20} />
          </div>
        </div>
      </div>
    </nav>
  );
}
