import { ElementType, HTMLAttributes, ReactElement } from "react";
import { BsChevronRight } from "react-icons/bs";
import { LuChevronRight } from "react-icons/lu";

interface NavigationItemProps extends HTMLAttributes<HTMLLIElement> {
  name: string;
  icon: ElementType;
  detail?: boolean;
}
export default function NavigationItem({
  name,
  icon: Icon,
  detail = false,
  ...rest
}: NavigationItemProps) {
  return (
    <li
      className="nav-item d-flex justify-content-between align-items-center"
      {...rest}
    >
      <a
        href="#"
        className="nav-link d-flex align-items-center text-white opacity-50"
      >
        <Icon className="me-3" size={20} />
        <small>{name}</small>
      </a>
      {detail && <LuChevronRight size={20} />}
    </li>
  );
}
