import React, { FC } from "react";

import Twitter from "../../../Assets/image/twitter.png";
import Tumblr from "../../../Assets/image/tumblr.png";
import Vimeo from "../../../Assets/image/vimeo.png";

interface ISocialIcons {
  isFooter?: boolean;
}

const SocialIcons: FC<ISocialIcons> = ({ isFooter }): JSX.Element => {
  return (
    <div
      className={`flex ${
        isFooter ? "flex-row" : "flex-col"
      }  justify-between  ${
        isFooter ? "mt-6 w-32" : " h-32 absolute right-24 top-96 mt-48"
      } `}
    >
      <img src={Tumblr} className="w-7 cursor-pointer" alt="Tumblr" />
      <img src={Twitter} className="w-7 cursor-pointer" alt="Twitter" />
      <img src={Vimeo} className="w-7 cursor-pointer" alt="Vimeo" />
    </div>
  );
};

export { SocialIcons };
