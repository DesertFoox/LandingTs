import React, { FC } from "react";

import { Line } from "../../components/common/Line";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { LandingContainer } from "../../components/LandingContainer";
import { Article } from "../../components/LandingContainer/Article";
import { Contacts } from "../../components/LandingContainer/Contacts";
import { Hero } from "../../components/LandingContainer/Hero/Hero";
import { MediaContent } from "../../components/LandingContainer/MediaContent";
import { Quote } from "../../components/LandingContainer/Quote";
import { Shop } from "../../components/LandingContainer/Shop";
import { Subscribe } from "../../components/LandingContainer/Subscribe";

const Landing: FC = (): JSX.Element => {
  return (
    <LandingContainer>
      <Header />
      <Hero />
      <Quote />
      {/* Line */}
      <Line />

      <MediaContent />

      <Shop />

      {/* Articles */}
      <Article
        className="justify-end"
        title="Surf Training"
        description="By better understanding the various aspects of surfing,
                     By better understanding the various aspects of surfing,
                     you will improve faster and have more fun in the water."
        isFirst
      />
      <Article
        isFirst={false}
        className="justify-start"
        title="Point Break"
        description="By better understanding the various aspects of By better understanding the various aspects of surfing,
                     By better understanding the various aspects of surfing,
                     you will improve faster and have more fun in the water."
      />

      {/* Line */}
      <Line />
      <Subscribe>
        <Contacts />
      </Subscribe>

      <Footer />
    </LandingContainer>
  );
};

export { Landing };
