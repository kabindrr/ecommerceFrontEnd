import React from "react";
import { Form, Placeholder } from "react-bootstrap";
import useForm from "../hooks/useForm";
import { CustomInput } from "../components/common/custom-input/CustomInput";

export const Register = () => {
  const { form, setForm, handleOnChange } = useForm("");

  const inputs = [
    {
      label: "First Name",
      name: "fName",
      type: "text",
      required: true,
      Placeholder: "sam",
    },
    {
      label: "Last Name",
      name: "lName",
      type: "text",
      required: true,
      Placeholder: "Smith",
    },
    {
      label: "phone",
      name: "phone",
      type: "number",

      Placeholder: "1234567890",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      Placeholder: "email@gmail.com",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      required: true,
      Placeholder: "**********",
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      required: true,
      Placeholder: "**********",
    },
  ];
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 ">
      <div className="" style={{ width: "450px" }}>
        <Form className="shadow-lg p-3 rounded">
          <h3>Admin Registration</h3>
          {inputs.map((item, i) => (
            <CustomInput key={i} {...item} onChange={handleOnChange} />
          ))}
          <div className="d-grid">
            <Button type="submit"> Register New Admin</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
