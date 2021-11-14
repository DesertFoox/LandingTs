import React, { FC } from "react";

import Logo from "../../Assets/image/logo.png";
import { SocialIcons } from "../common/SocialIcons/SocialIcons";

const Footer: FC = (): JSX.Element => {
  return (
    <footer className="mx-auto flex flex-col items-center">
      <img src={Logo} alt="logo" className="h-auto w-10 block" />

      <ul className="flex mt-8">
        <li className="mb-2  list-none uppercase mr-8 font-spartan text-xtiny cursor-pointer tracking-widest text-secondary">
          stories
        </li>
        <li className="mb-2 list-none uppercase mr-8 ml-8 font-spartan text-xtiny cursor-pointer tracking-widest text-secondary">
          events
        </li>
        <li className="mb-2  list-none uppercase mr-8 ml-8 font-spartan text-xtiny cursor-pointer tracking-widest text-secondary">
          places
        </li>
        <li className="mb-2  list-none uppercase ml-8 font-spartan text-xtiny cursor-pointer tracking-widest text-secondary">
          boards
        </li>
      </ul>

      <SocialIcons isFooter />
    </footer>
  );
};

export { Footer };
