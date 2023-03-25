import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery"; // very useful
import Header from "../../components/Header";

const phoneRegex =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
};

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  phone: yup
    .string()
    .matches(phoneRegex, "Phone number is not valid!")
    .required("Required"),
  address: yup.string().required(),
});

export default function Form() {
  const isNonMobile = useMediaQuery("(min-width:600px)"); // return true if > 600

  const handleFormSubmit = (e, values) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="create user" subTitle="Create a new user profile" />

      <Formik initialValues={initialValues} validationSchema={checkoutSchema}>
        {({ values, errors, touched, handleBlur, handleChange }) => (
          <form>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": {
                  gridColumn: isNonMobile ? undefined : "span 4",
                },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName" // 	Name attribute of the input element. --> initialValues.attribute
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName" // 	Name attribute of the input element. --> initialValues.attribute
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email" // 	Name attribute of the input element. --> initialValues.attribute
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Phone number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phone}
                name="phone" // 	Name attribute of the input element. --> initialValues.attribute
                error={!!touched.phone && !!errors.phone}
                helperText={touched.phone && errors.phone}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name="address" // 	Name attribute of the input element. --> initialValues.attribute
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="flex-end" mt="20px">
              <Button
                type="submit"
                variant="contained"
                sx={{
                  p: "10px",
                }}
                onClick={(e) => handleFormSubmit(e, values)}
              >
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
}
