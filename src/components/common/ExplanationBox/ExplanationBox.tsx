import React, { FC } from "react";

interface IExplanationProp {
  caption?: string;
  title?: string;
  description?: string;
  className?: string;
  isReadMore?: boolean;
  readMoreLink?: string;
  isAbsolute?: boolean;
  center?: boolean;
  underscope?: boolean;
  descClass?: string;
  number?: string;
}

const ExplanationBox: FC<IExplanationProp> = ({
  caption,
  title,
  description,
  className,
  isReadMore,
  readMoreLink,
  isAbsolute = true,
  center,
  underscope,
  descClass,
  number,
}): JSX.Element => {
  return (
    <article
      className={`z-20  bg-transparent ${
        isAbsolute ? "absolute" : "relative"
      }  justify-between ${className}`}
    >
      <label
        className={`text-xtiny font-spartan text-info tracking-widest uppercase ${
          center && "text-center mx-auto block"
        }`}
      >
        {caption}
      </label>

      <h3
        className={`font-playfair text-8xl relative text-quote ${
          center && "text-center mx-auto block"
        }`}
      >
        {title}
        {underscope && (
          <>
            <span className="absolute text-section font-spartan text-130 left-0 -top-28 -z-1">
              {number}
            </span>
            <div className="bg-blue-300 w-8 h-tiny"></div>
          </>
        )}
      </h3>

      <p
        className={`text-custom-gray text-tiny font-myriad whitespace-pre-line w-88 mb-8 ${descClass}`}
      >
        {description}
      </p>

      {isReadMore && (
        <a
          href={readMoreLink ? readMoreLink : "#"}
          className="uppercase font-spartan text-xtiny text-quote
                     tracking-widest border-b-2 border-blue-300
                     py-1"
        >
          Read More
        </a>
      )}
    </article>
  );
};

export { ExplanationBox };
