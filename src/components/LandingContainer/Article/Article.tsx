import React, { FC } from "react";

import { ExplanationBox } from "../../common/ExplanationBox/ExplanationBox";
import Swiming from "../../../Assets/image/swiming.png";
import Swiming2 from "../../../Assets/image/swiming2.png";

interface IArticleProp {
  className: string;
  isFirst: boolean;
  title: string;
  description: string;
}

const Article: FC<IArticleProp> = ({
  className,
  isFirst,
  title,
  description,
}): JSX.Element => {
  return (
    <section className={`flex relative w-4/5 mx-auto ${className} mt-20`}>
      <ExplanationBox
        title={title}
        className={`mt-16 ${isFirst ? "left-10" : "right-24"} `}
        underscope
        descClass="mt-8 mb-12"
        isReadMore
        number={isFirst ? "01" : "02"}
        description={description}
      />

      <figure className={`relative ${!isFirst && "ml-24"}`}>
        <img
          src={isFirst ? Swiming : Swiming2}
          className="relative z-40"
          alt="swiming"
        />
        <figcaption
          className={`uppercase text-third font-spartan text-xs
                   tracking-widest transform -rotate-90 absolute top-12 mt-2 ${
                     isFirst ? "-right-24" : "left-4"
                   } `}
        >
          Surf Camps
        </figcaption>
      </figure>
    </section>
  );
};

export { Article };
