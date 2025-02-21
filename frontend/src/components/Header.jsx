import { Logo } from "../static/images";

import { Link, NavLink } from "react-router";

const navLinks = [
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Our Activities",
    to: "/activities",
  },
  {
    label: "Get Involved",
    to: "/get-involved",
  },
];

const Header = () => {
  return (
    <header className="bg-black py-4 rounded-b-3xl">
      <div className="container">
        <div className="flex items-center justify-between gap-5">
          <Link to="/">
            <img src={Logo} alt="Debate" />
          </Link>

          <ul className="flex justify-end items-center gap-10">
            {navLinks.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className="font-semibold text-white">
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink
                to="/get-started"
                className="font-semibold border border-solid border-white bg-white rounded-lg rounded-br-none px-4 py-2 transition duration-500 hover:bg-black hover:text-white"
              >
                Get Started
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
