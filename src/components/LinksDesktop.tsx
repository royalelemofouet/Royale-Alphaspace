import { type Link, links } from "@/utils/links.ts";
import { NavLink } from "react-router-dom";

const LinksDesktop = () => {
  return (
    <nav className="flex w-full sticky top-[64px] z-40 bg-gradient-to-r from-black via-blue-900 to-black py-4 border-t border-white/10 shadow-xl justify-center items-center text-white">
      <div className="flex gap-x-[3em] items-center">
        {links.map((link) => {
          const { ref, label } = link as Link;
          return (
            <NavLink
              key={label}
              to={ref}
              className={({ isActive }) =>
                `capitalize tracking-wider transition-all duration-300 px-6 py-2 text-sm font-medium flex items-center justify-center ${
                  isActive
                    ? "border-2 border-white rounded-full scale-110 shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                    : "hover:text-blue-300"
                }`
              }
            >
              {label}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default LinksDesktop;