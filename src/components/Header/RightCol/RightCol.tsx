import React, { FC } from "react";
import { SocialIcons } from "../../common/SocialIcons/SocialIcons";

const RightCol: FC = (): JSX.Element => {
  return (
    <article className="flex flex-col justify-between">
      <p
        className="uppercase text-third font-spartan text-xs
                   tracking-widest absolute -right-10 transform -rotate-90
                   top-40"
      >
        First Surfing Magazine
      </p>

      <SocialIcons />
    </article>
  );
};

export { RightCol };
