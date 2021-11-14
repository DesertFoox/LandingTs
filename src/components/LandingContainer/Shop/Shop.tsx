import React, { FC } from "react";

import { ExplanationBox } from "../../common/ExplanationBox/ExplanationBox";
import { ShopSlider } from "./ShopSlider/ShopSlider";

const Shop: FC = (): JSX.Element => {
  return (
    <section className="bg-bg-1 bg-top pt-96 bg-no-repeat -mt-16 relative mx-auto mb-36">
      <ExplanationBox
        caption="shop"
        className="relative mx-auto mt-12"
        isAbsolute={false}
        center
        title="Surfboards"
      />

      <ShopSlider />
    </section>
  );
};

export { Shop };
