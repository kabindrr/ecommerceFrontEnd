import React from "react";
import { Button, Form, Placeholder } from "react-bootstrap";
import useForm from "../../hooks/useForm";
import { CustomInput } from "../../components/common/custom-input/CustomInput";
import { createNewAdminAction } from "../../features/users/userAction";
import { toast } from "react-toastify";

const Register = () => {
  const { form, setForm, handleOnChange } = useForm({});

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;

    if (confirmPassword !== rest.password) {
      return toast.error("Password do not match");
    }
    createNewAdminAction(rest);
  };

  const inputs = [
    {
      label: "First Name",
      name: "fName",
      type: "text",
      required: true,
      placeholder: "sam",
    },
    {
      label: "Last Name",
      name: "lName",
      type: "text",
      required: true,
      placeholder: "Smith",
    },
    {
      label: "phone",
      name: "phone",
      type: "number",

      placeholder: "1234567890",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      placeholder: "email@gmail.com",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      required: true,
      placeholder: "**********",
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      required: true,
      placeholder: "**********",
    },
  ];
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 ">
      <div className="" style={{ width: "450px" }}>
        <Form className="shadow-lg p-3 rounded" onSubmit={handleOnSubmit}>
          <h3>Admin Registration</h3>
          {inputs.map((item, i) => (
            <CustomInput key={i} {...item} onChange={handleOnChange} />
          ))}
          <div className="d-grid">
            <Button className="mt-3" type="submit">
              {" "}
              Register New Admin{" "}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default Register;
