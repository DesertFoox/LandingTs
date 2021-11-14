import React, { FC } from "react";
import { Formik, Form } from "formik";

import { TextInput } from "../../common/TextInput";
import { SubscribeValidation } from "../../../core/validations/subscribe.validations";
import { showToast } from "../../../core/utils/show-toast";
import { ToastTypes } from "../../../core/enums/toast-types.enum";

const Subscribe: FC = ({ children }): JSX.Element => {
  const onSubmit = () => {
    showToast(["Send Subscribe SuccessFully"], ToastTypes.success);
  };

  return (
    <section className="bg-bg-2 bg-no-repeat bg-bottom mx-auto -mt-96 pt-96 z-0 relative h-1300">
      <h3 className="font-playfair text-4xl text-quote text-center">
        Join the Club
      </h3>

      <p
        className="font-poppins text-sm w-550 text-custom-gray
                    mx-auto whitespace-pre-wrap text-center mt-7"
      >
        By better understanding the various aspects of surfing, you will improve
        faster and have more fun in the water.
      </p>

      <Formik
        initialValues={{ email: "" }}
        onSubmit={onSubmit}
        validationSchema={SubscribeValidation}
      >
        <Form className="flex justify-center mt-8">
          <TextInput name="email" placeholder="your e-mail" />

          <button className="bg-bg-submit w-12 h-12 bg-no-repeat bg-center bg-submit"></button>
        </Form>
      </Formik>

      {children}
    </section>
  );
};

export { Subscribe };
