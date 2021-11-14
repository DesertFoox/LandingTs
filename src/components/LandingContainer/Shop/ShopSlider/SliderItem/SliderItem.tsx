import React, { FC } from "react";

import ShopSliderItem from "../../../../../Assets/image/shopSliderItem.png";

interface ISliderItemProp {
  caption: string;
  title: string;
  money: string;
}

const SliderItem: FC<ISliderItemProp> = ({
  caption,
  title,
  money,
}): JSX.Element => {
  return (
    <div className="relative ">
      <img src={ShopSliderItem} alt="ShopSliderItem" />
      <article className="absolute left-64 top-52 z-10 w-full">
        <span className="uppercase font-poppins text-xs text-poppins tracking-widest2">
          {caption}
        </span>

        <p className="font-playfair text-2xl">{title}</p>

        <span className="relative font-poppins text-xl text-pinc ml-16 top-8">
          ${money}
          <button className="uppercase font-spartan text-xtiny block text-quote tracking-widest ml-16">
            Buy
          </button>
        </span>
      </article>
    </div>
  );
};

export { SliderItem };
