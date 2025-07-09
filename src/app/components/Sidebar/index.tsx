import { BsFileMusic } from "react-icons/bs";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { RiUserStarLine } from "react-icons/ri";

import {
  LuFolder,
  LuHeart,
  LuLibrary,
  LuPin,
  LuTag
} from "react-icons/lu";
import { PiMicrophoneStage } from "react-icons/pi";
import NavigationItem from "../NavigationItem";

export default function Sidebar() {
  return (
    <nav className="d-flex flex-column flex-shrink-0 pt-2 px-2">
      <ul className="nav nav-pills flex-column mb-auto gap-2">
        <NavigationItem name={"Pins"} icon={LuPin} detail />
        <NavigationItem name={"Playlists"} icon={BsFileMusic} detail />
        <NavigationItem name={"Liked Songs"} icon={LuHeart} />
        <NavigationItem name={"Saves"} icon={LuTag} />
        <NavigationItem name={"Albums"} icon={LuLibrary} />
        <NavigationItem name={"Folders"} icon={LuFolder} />
        <NavigationItem name={"Podcasts"} icon={PiMicrophoneStage} />
        <NavigationItem name={"Audiobooks"} icon={HiOutlineBookOpen} />
        <NavigationItem name={"Artists"} icon={RiUserStarLine} />
      </ul>
    </nav>
  );
}
