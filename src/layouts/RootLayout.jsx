/* eslint-disable no-undef */
import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? "text-blue-600" : "")}
        to="/"
      >
        Home
      </NavLink>{" "}
      |{" "}
      <NavLink
        className={({ isActive }) => (isActive ? "text-blue-600" : "")}
        to="/about"
      >
        About
      </NavLink>{" "}
      |{" "}
      <NavLink
        className={({ isActive }) => (isActive ? "text-blue-600" : "")}
        to="/blogs"
      >
        Blogs
      </NavLink>
      <Outlet />
    </>
  );
}
