import {
  Button,
  Container,
  Form,
  FormLabel,
  InputGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

import LoginCSS from "./assets/Login.module.css";
import { LoginSchema } from "../../schemas/authSchema";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Toaster } from "react-hot-toast";

export const Login = () => {
  const { onLoginSubmit } = useContext(AuthContext);

  const onSubmit = () => {
    onLoginSubmit(values);
  };

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit,
    });

  return (
    <section className={LoginCSS.wrapper}>
      <Form
        id={LoginCSS["login"]}
        method="POST"
        onSubmit={handleSubmit}
        autoComplete="on"
      >
        <Container className="container">
          <h2>Login</h2>

          <InputGroup>
            <FormLabel htmlFor="email">Email: </FormLabel>
            <input
              type="email"
              name="email"
              className={
                errors.email && touched.email
                  ? LoginCSS.inputerr
                  : LoginCSS.authField
              }
              id="email"
              placeholder="peter@gmail.com"
              value={values.email}
              onChange={handleChange("email")}
              onBlur={handleBlur("email")}
            />
          </InputGroup>

          <fieldset>
            <label htmlFor="login-pass">Password: </label>
            <input
              type="password"
              name="password"
              className={
                errors.password && touched.password
                  ? LoginCSS.inputerr
                  : LoginCSS.authField
              }
              id="password"
              value={values.password}
              onChange={handleChange("password")}
              onBlur={handleBlur("password")}
            />
          </fieldset>

          <Button
            type="submit"
            className={`w-100 ${LoginCSS.submit}`}
            value="Submit"
          >
            {" "}
            Login
          </Button>

          <p className={LoginCSS.field}>
            <span>
              If you don't have profile, click <Link to="/register">here</Link>
            </span>
          </p>
        </Container>
      </Form>
      <Toaster />
    </section>
  );
};
