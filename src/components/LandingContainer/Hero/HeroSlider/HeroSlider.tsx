import React, { FC, useState } from "react";
import Slider from "react-slick";

import Left from "../../../../Assets/image/left.png";
import Right from "../../../../Assets/image/right.png";
import HeroSliderImage from "../../../../Assets/image/heroSLider.png";

const HeroSlider: FC = (): JSX.Element => {
  const [slider, setSlider] = useState<Slider | null>(null);
  const [page, setPage] = useState(1);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  const next = () => {
    slider && slider.slickNext();
    setPage((old) => (old < 5 ? old + 1 : 1));
  };
  const previous = () => {
    slider && slider.slickPrev();
    setPage((old) => (old > 1 ? old - 1 : 5));
  };
  return (
    <>
      <div className="w-slider relative">
        <div>
          <Slider ref={(c) => setSlider(c)} {...settings}>
            <div key={1}>
              <img
                src={HeroSliderImage}
                className="w-full"
                alt="HeroSliderImage"
              />
            </div>
            <div key={2}>
              <img
                src={HeroSliderImage}
                className="w-full"
                alt="HeroSliderImage"
              />
            </div>
            <div key={3}>
              <img
                src={HeroSliderImage}
                className="w-full"
                alt="HeroSliderImage"
              />
            </div>
            <div key={4}>
              <img
                src={HeroSliderImage}
                className="w-full"
                alt="HeroSliderImage"
              />
            </div>
            <div key={5}>
              <img
                src={HeroSliderImage}
                className="w-full"
                alt="HeroSliderImage"
              />
            </div>
          </Slider>
        </div>
      </div>
      <div className="text-center absolute bottom-32 left-0">
        <img
          className="w-7 inline cursor-pointer mr-1"
          onClick={previous}
          src={Left}
          alt="Left"
        />

        <span className="text-info font-spartan text-xtiny mr-1">{page}</span>
        <span className="text-third font-spartan text-xtiny">/</span>
        <span className="font-spartan text-xtiny ml-1">5</span>

        <img
          className="w-7 inline cursor-pointer ml-1"
          onClick={next}
          src={Right}
          alt="Right"
        />
      </div>
    </>
  );
};

export { HeroSlider };
