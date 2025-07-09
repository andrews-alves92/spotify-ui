import { IoEllipsisHorizontal } from "react-icons/io5";
import { LuHeart, LuListMusic } from "react-icons/lu";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { PiDevices } from "react-icons/pi";

export default function PlayerSharingControls() {
  return (
    <div className="flex-1 justify-content-end gap-3 align-items-center">
      <LuHeart size={20} />
      <MdOutlineLibraryAdd size={20} />
      <LuListMusic size={20} />
      <PiDevices size={20} />
      <IoEllipsisHorizontal size={20} />
    </div>
  );
}
