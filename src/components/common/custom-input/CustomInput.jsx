import React from "react";

export const CustomInput = () => {
  return (
    <Form.Group controlId="formBasicEmail">
      {label && <Form.Label>Email address</Form.Label>}
    </Form.Group>
  );
};
