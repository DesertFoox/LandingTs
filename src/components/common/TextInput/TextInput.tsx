import React, { FC } from "react";
import { Field, ErrorMessage } from "formik";

interface ITextInput {
  name: string;
  placeholder: string;
}

const TextInput: FC<ITextInput> = ({ name, placeholder }): JSX.Element => {
  return (
    <Field name={name}>
      {({ field, meta }: any) => (
        <div>
          <input
            {...field}
            placeholder={placeholder}
            value={meta.value}
            className=" bg-input h-1 w-550 p-6 placeholder-black font-spartan tracking-widest text-xtiny uppercase focus:outline-none"
          />

          <ErrorMessage name={name}>
            {(msg: string) => (
              <p className="text-danger m-0 pt-1 text-sm font-myriad">{msg}</p>
            )}
          </ErrorMessage>
        </div>
      )}
    </Field>
  );
};
export { TextInput };
