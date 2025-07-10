import { FiPlusCircle, FiArrowDownCircle } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { LuListPlus, LuUpload } from "react-icons/lu";
import { PiShuffleBold } from "react-icons/pi";
import PlayButton from "../../PlayButton";
import ShuffleButton from "../../PlayerComponent/ShuffleButton";

export default function PlaylistControls() {
  return (
    <div className="row mt-3">
      <div className="d-flex align-items-center gap-4 col">
        <PlayButton />
        <ShuffleButton />
        <FiPlusCircle size={18} role="button" />
        <LuListPlus size={20} role="button" />
        <FiArrowDownCircle size={18} role="button" />
        <LuUpload size={18} role="button" />
        <IoEllipsisHorizontal size={20} role="button" />
      </div>
      <div className="d-flex align-items-center gap-4 col-auto">
        <GoSearch size={20} role="button" />
      </div>
    </div>
  );
}
