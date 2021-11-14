import React, { FC } from "react";

const Quote: FC = (): JSX.Element => {
  return (
    <section className="text-center">
      <h3 className="text-center text-quote-size font-myriad-lite text-quote w-700 whitespace-pre-wrap mx-auto mt-9">
        Surfing is the most blissful experience you can have on this planet, a
        taste of heaven.
      </h3>

      <p className="uppercase font-spartan text-xtiny text-quote tracking-widest mt-4">
        John McCarthy
      </p>
    </section>
  );
};

export { Quote };
