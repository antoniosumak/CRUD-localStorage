import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ModalWrapper } from "../components/Modal/ModalStyles";
import Section from "../components/Section/Section";
import { AuthContext } from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import {
  Form,
  Input,
  Label,
  FormRow,
  Button,
  Center,
  InputError,
  ErrorMessage,
} from "../lib/styles/generalStyles";
import Modal from "../components/Modal/Modal";

const Login = () => {
  const [isFinished, setIsFinished] = useState(false);
  const [errorText, setErrorText] = useState("");
  const history = useHistory();
  const { setUser } = useContext(AuthContext);
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Wrong email format")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be 6 characters long")
        .required("Password is required!"),
    }),
    onSubmit: async (values) => {
      if (values.email === "admin@admin.com" && values.password === "123456") {
        await setUser(true);
        history.push("/");
      } else {
        await setUser(false);
        setErrorText("Wrong email or password!");
        setIsFinished(true);
      }
    },
  });
  return (
    <Section fullHeight>
      <Center>
        <Modal title="Login">
          {isFinished && <ErrorMessage>{errorText}</ErrorMessage>}
          <Form onSubmit={formik.handleSubmit}>
            <FormRow>
              <Label htmlFor="email">Email </Label>
              <Input
                id="email"
                type="email"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <InputError>{formik.errors.email}</InputError>
              ) : null}
            </FormRow>
            <FormRow>
              <Label htmlFor="password">Password </Label>
              <Input
                id="password"
                type="password"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password ? (
                <InputError>{formik.errors.password}</InputError>
              ) : null}
            </FormRow>
            <FormRow>
              <Button type="submit">Login</Button>
            </FormRow>
          </Form>
        </Modal>
      </Center>
    </Section>
  );
};

export default Login;
