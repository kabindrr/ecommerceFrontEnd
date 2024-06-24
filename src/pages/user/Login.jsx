import React, { forwardRef, useEffect, useRef } from "react";
import { Button, Form, Placeholder } from "react-bootstrap";
import useForm from "../../hooks/useForm";
import { CustomInput } from "../../components/common/custom-input/CustomInput";
import {
  createNewAdminAction,
  loginAdminAction,
} from "../../features/users/userAction";
import { toast } from "react-toastify";
import { apiProcessor } from "../../services/axios";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, redirect } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const { user } = useSelector((state) => state.userInfo);

  useEffect(() => {
    user?._id && Navigate(redirectTo);
  }, [user?._id]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email || !password) {
      return toast.error("Must have email and password filled");
    }

    //call server to process the authentication

    dispatch(loginAdminAction({ email, password }));
  };

  const inputs = [
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      placeholder: "email@gmail.com",
      forwardRef: emailRef,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      required: true,
      placeholder: "**********",
      forwardRef: passwordRef,
    },
  ];
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div className="" style={{ width: "450px" }}>
        <Form
          className="shadow-lg p-3 rounded bg-light"
          onSubmit={handleOnSubmit}
        >
          <h3 className="text-center">Admin Login</h3>
          {inputs.map((item, i) => (
            <CustomInput key={i} {...item} />
          ))}
          <div className="d-grid">
            <Button className="mt-3" type="submit">
              {" "}
              Admin Login{" "}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default Login;
