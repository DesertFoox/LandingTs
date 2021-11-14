import React, { FC } from "react";

import ContactPic from "../../../Assets/image/contact.png";

const Contacts: FC = (): JSX.Element => {
  return (
    <section className="w-1440 mx-auto mt-36 flex justify-start">
      <img src={ContactPic} alt="contact" />

      <div className="-ml-8 mt-24">
        <span className="uppercase tracking-widest text-third text-xtiny font-spartan">
          our camp
        </span>

        <h3 className="font-playfair text-3xl w-80 text-secondary m-12">
          CA 91932, USA Imperial Beach 560 Silver Strand Blvd
        </h3>

        <button className="uppercase font-spartan text-info tracking-widest text-xtiny border-b-2 border-blue-300 pb-1">
          get in touch
        </button>
      </div>
    </section>
  );
};

export { Contacts };
