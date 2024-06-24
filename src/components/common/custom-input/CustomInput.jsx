import { Form } from "react-bootstrap";

export const CustomInput = ({ label, forwardRef, ...rest }) => {
  return (
    <Form.Group>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control ref={forwardRef} {...rest} />
    </Form.Group>
  );
};
