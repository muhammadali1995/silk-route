import { NavLink } from "react-router-dom";

export default function NavbarLink({ link, name, setMenuIsOpen }) {
  let activeStyle = {
    color: "#FCFE00",
  };
  return (
    <li className="hover:text-delayedYellow z-10 ">
      <NavLink
        to={link}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        onClick={() => setMenuIsOpen(false)}
      >
        {name}
      </NavLink>
    </li>
  );
}
