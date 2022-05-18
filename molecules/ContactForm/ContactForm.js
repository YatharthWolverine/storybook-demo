import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Image from "next/image";
import axios from "axios";
import { Box, Error, Grid, Flex, Button } from "atoms";
import { SuccessModal } from "molecules/Modals";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid format")
    .required("Required")
    .max(100, "Max 100 characters allowed")
    .min(3, "Min 3 characters required"),
  first_name: Yup.string()
    .required("Required")
    .max(100, "Max 100 characters allowed")
    .min(3, "Min 3 characters required"),
  last_name: Yup.string()
    .required("Required")
    .max(100, "Max 100 characters allowed")
    .min(3, "Min 3 characters required"),
  message: Yup.string().max(1000, "Max 1000 characters allowed"),
});

export const ContactForm = ({ apidata, data }) => {
  const [isVisibleSuccess, setVisibleSuccess] = useState(false);

  const onSubmit = async (values, { resetForm, setSubmitting }) => {
    setVisibleSuccess(true);
    try {
      await axios
        .post(
          `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/contact-responses`,
          values
        )
        .then((response) => {
          if (response.status === 200) {
            setVisibleSuccess(true);
          } else {
            setVisibleSuccess(false);
          }
        });
      resetForm();
    } catch (e) {
      console.error(e);
    }

    setSubmitting(false);
  };

  return (
    <Box maxWidth="58rem">
      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          email: "",
          message: "",
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ touched, errors }) => {
          return (
            <Form>
              <Grid
                pt={{ xs: "8rem", md: "5rem", lg: "2.6rem" }}
                gridGap="3rem"
              >
                <Grid
                  gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
                  gridColumnGap={{ md: "2.9rem", lg: "1.3rem" }}
                  gridRowGap={{ xs: "3rem", md: "0rem" }}
                >
                  <Box className="form-control">
                    <Field
                      type="text"
                      id="first_name"
                      name="first_name"
                      placeholder="First Name*"
                      className={
                        touched.first_name && errors.first_name
                          ? "input-error"
                          : ""
                      }
                    />
                    <ErrorMessage name="first_name" component={Error} />
                  </Box>
                  <Box className="form-control">
                    <Field
                      type="text"
                      id="last_name"
                      name="last_name"
                      placeholder="Last Name*"
                      className={
                        touched.last_name && errors.last_name
                          ? "input-error"
                          : ""
                      }
                    />
                    <ErrorMessage name="last_name" component={Error} />
                  </Box>
                </Grid>
                <Grid gridGap="3rem">
                  <Box className="form-control">
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email*"
                      className={
                        touched.email && errors.email ? "input-error" : ""
                      }
                    />
                    <ErrorMessage name="email" component={Error} />
                  </Box>

                  <Box className="form-control">
                    <Field
                      as="textarea"
                      type="text"
                      id="message"
                      name="message"
                      placeholder="Message"
                      rows="4"
                    />
                    <ErrorMessage name="message" component={Error} />
                  </Box>
                </Grid>

                <Flex
                  justifyContent={{ xs: "flex-start", md: "flex-end" }}
                  mt={{ xs: "4rem", md: "3.9rem", lg: "4.5rem" }}
                >
                  <Box
                    position="absolute"
                    width={"auto"}
                    height="100%"
                    top={{ xs: "1.6rem", md: "2.2rem" }}
                    left={{ xs: "16.5rem", md: "18.9rem", lg: "18%" }}
                  >
                    <Image
                      src={apidata?.triangle_desktop?.url}
                      alt={apidata?.triangle_desktop?.alternativeText}
                      height={19}
                      width={187}
                    />
                  </Box>
                  <Button
                    variant="black"
                    height={{ xs: "4.5rem", md: "5.2rem", lg: "5.9rem" }}
                    width={{ xs: "14.4rem", md: "16.3rem", lg: "17.2rem" }}
                    type="submit"
                  >
                    {apidata?.submit?.text}
                  </Button>
                </Flex>
              </Grid>
            </Form>
          );
        }}
      </Formik>

      {isVisibleSuccess && (
        <SuccessModal
          data={data}
          isOpen={isVisibleSuccess}
          onRequestClose={() => {
            setVisibleSuccess(false);
          }}
          ariaHideApp={false}
        />
      )}
    </Box>
  );
};
