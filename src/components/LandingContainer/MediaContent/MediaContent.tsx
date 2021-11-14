import React, { FC } from "react";

import { ExplanationBox } from "../../common/ExplanationBox/ExplanationBox";
import Image1 from "../../../Assets/image/media1.png";
import Image2 from "../../../Assets/image/media2.png";

const MediaContent: FC = (): JSX.Element => {
  return (
    <section className="w-4/5 mx-auto relative">
      <img src={Image1} alt="Image1" />

      <ExplanationBox
        className="ml-32 mt-9"
        isReadMore
        description="By better understanding the various aspects of surfing, you will improve faster and have more fun in the water."
      />

      <img
        src={Image2}
        alt="Image2"
        className="absolute top-10 right-0 cursor-pointer z-10"
      />
    </section>
  );
};

export { MediaContent };
