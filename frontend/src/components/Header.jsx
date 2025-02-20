import { Logo } from "../static/images";

const Header = () => {
  return (
    <header className="bg-dark py-4 rounded-b-3xl">
      <div className="container">
        <div className="flex items-center justify-between gap-5">
          <img src={Logo} alt="Debate" />

          <ul>
            <li className="font-medium transition duration-500 text-light-alt hover:text-success">
              Our Activities
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
