import React, { FC, useState } from "react";
import Slider from "react-slick";

import PrevIcon from "../../../../Assets/image/prevIcon.png";
import NextIcon from "../../../../Assets/image/nextIcon.png";
import { SliderItem } from "./SliderItem";

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <img
      className={`${className}`}
      style={{ ...style, width: "20px", height: "auto", right: "-55px" }}
      src={NextIcon}
      onClick={onClick}
      alt="NextIcon"
    />
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <img
      className={className}
      style={{ ...style, width: "20px", height: "auto", left: "-55px" }}
      src={PrevIcon}
      onClick={onClick}
      alt="PrevIcon"
    />
  );
}

const ShopSlider: FC = (): JSX.Element => {
  const [slider, setSlider] = useState<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // fade: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="mx-auto w-4/5">
      <Slider ref={(c) => setSlider(c)} {...settings}>
        <div key={1}>
          <SliderItem
            caption="Funboards"
            title="Chilli Rare Bird"
            money="890"
          />
        </div>
        <div key={2}>
          <SliderItem caption="Surfboards" title="Emery NEM XF" money="950" />
        </div>
        <div key={3}>
          <SliderItem caption="Funboards" title="Agency GROM" money="670" />
        </div>
        <div key={4}>
          <SliderItem
            caption="Funboards"
            title="Chilli Rare Bird"
            money="890"
          />
        </div>
        <div key={5}>
          <SliderItem caption="Surfboards" title="Emery NEM XF" money="950" />
        </div>
        <div key={6}>
          <SliderItem caption="Funboards" title="Agency GROM" money="670" />
        </div>
      </Slider>

      <button
        className="uppercase font-spartan text-xtiny text-quote
                     tracking-widest border-b-2 border-blue-300
                     py-1 mt-8 mx-auto block"
      >
        Show All
      </button>
    </div>
  );
};

export { ShopSlider };
