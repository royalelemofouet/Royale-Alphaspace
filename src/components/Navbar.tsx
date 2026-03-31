import { LinksMobile } from ".";
import LinksDesktop from "./LinksDesktop";

const Navbar = () => {
  return (
    <nav className="sticky top-[80px] z-40 w-full bg-gradient-to-r from-black via-blue-900 to-black shadow-lg ">
      <div className="align-element">
        <LinksMobile />
        <LinksDesktop />
      </div>
    </nav>
  );
};

export default Navbar;