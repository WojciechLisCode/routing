import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink
        to="/about"
        style={{ margin: 10 }}
        activeStyle={{
          color: "red",
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/discover"
        style={{ margin: 10 }}
        activeStyle={{
          color: "red",
        }}
      >
        Discover
      </NavLink>
      <NavLink
        exact
        to="/"
        style={{ margin: 10 }}
        activeStyle={{
          color: "red",
        }}
      >
        Home
      </NavLink>
    </div>
  );
}
