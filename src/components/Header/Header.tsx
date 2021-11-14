import React, { FC } from "react";

import Logo from "../../Assets/image/logo.png";
import { RightCol } from "./RightCol/RightCol";

const Header: FC = (): JSX.Element => {
  return (
    <header className="w-full relative">
      <RightCol />

      <div className="w-4/5 h-32 flex justify-between items-center mx-auto">
        <img src={Logo} alt="logo" className="h-3/6 -ml-5" />

        <nav className={`w-10/12 relative block`}>
          <ul className="absolute z-20 top-14 w-full left-0 sm:flex sm:relative sm:top-0">
            <li className="mb-2  list-none uppercase mr-12 font-spartan text-xtiny cursor-pointer tracking-widest text-secondary sm:mb-0">
              stories
            </li>
            <li className="mb-2 list-none uppercase mr-16 font-spartan text-xtiny cursor-pointer tracking-widest text-secondary sm:mb-0 ">
              events
            </li>
            <li className="mb-2  list-none uppercase mr-16 font-spartan text-xtiny cursor-pointer tracking-widest text-secondary sm:mb-0">
              places
            </li>
            <li className="mb-2  list-none uppercase mr-16 font-spartan text-xtiny cursor-pointer tracking-widest text-secondary sm:mb-0">
              boards
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export { Header };
