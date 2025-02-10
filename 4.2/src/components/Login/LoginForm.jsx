import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import { authContext } from "../../providers/AuthProvider/AuthProvider";
import { useContext } from "react";

const LoginForm = () => {
  const { login } = useContext(authContext);
  const initialValues = {
    login: "",
    password: "123qwe",
  };
  const onSubmit = (values) => {
    console.log(values);
    login(values.login);
    toast.success("Login succesful");
  };
  return (
    <div className="formWrapper">
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className="form">
          <Field name="login" placeholder="Enter nickname" />
          <Field name="password" placeholder="Enter Password" type="password" />
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};
export default LoginForm;
