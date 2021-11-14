import React, { FC } from "react";
import { ExplanationBox } from "../../common/ExplanationBox/ExplanationBox";
import { HeroSlider } from "./HeroSlider/HeroSlider";

const Hero: FC = (): JSX.Element => {
  return (
    <section className="w-4/5 mx-auto relative flex justify-end">
      <ExplanationBox
        caption="Your"
        title="Beautiful Escape"
        description="One of the greatest things about the sport of surfing is that you need only three things: your body, 
        a surfboard, and a wave."
        className="mt-44 pt-2 left-0"
      />

      <HeroSlider />
    </section>
  );
};

export { Hero };
