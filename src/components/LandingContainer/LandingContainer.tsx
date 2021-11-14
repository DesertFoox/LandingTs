import React, { FC } from "react";

const LandingContainer: FC = ({ children }): JSX.Element => {
  return <section className="mx-auto w-1536 pb-20">{children}</section>;
};

export { LandingContainer };
