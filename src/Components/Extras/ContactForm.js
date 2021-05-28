import React, { useCallback } from "react";
import { Form, Button } from "antd";
import FormBuilder, { useForceUpdate } from "antd-form-builder";

const ContactForm = () => {
  const [status, setStatus] = React.useState(true);
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [form] = Form.useForm();
  const handleFinish = useCallback((values) => {});
  const handleChange = (fieldName, value) => {
    switch (fieldName) {
      case "name":
        setName(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
    switch (fieldName) {
      case "name": {
        if (
          value !== "" &&
          // message !== "" &&
          // phone !== "" &&
          email !== "" &&
          email.includes("@") === true &&
          email.includes(".com") === true
        ) {
          setStatus(false);
        } else setStatus(true);
        break;
      }
      // case "phone": {
      //   if (
      //     value !== "" &&
      //     message !== "" &&
      //     name !== "" &&
      //     email !== "" &&
      //     email.includes("@") === true &&
      //     email.includes(".com") === true
      //   ) {
      //     setStatus(false);
      //   } else setStatus(true);
      //   break;
      // }
      case "email": {
        if (
          value !== "" &&
          // message !== "" &&
          // phone !== "" &&
          name !== "" &&
          value.includes("@") === true &&
          value.includes(".com") === true
        ) {
          setStatus(false);
        } else setStatus(true);
        break;
      }
      // case "message": {
      //   if (
      //     value !== "" &&
      //     name !== "" &&
      //     phone !== "" &&
      //     email !== "" &&
      //     email.includes("@") === true &&
      //     email.includes(".com") === true
      //   ) {
      //     setStatus(false);
      //   } else setStatus(true);
      //   break;
      // }
      default:
        break;
    }
  };

  const meta1 = [
    {
      key: "fullname",
      label: "Full Name",
      required: true,
      validateTrigger: "onBlur",
      onChange: (e) => {
        handleChange("name", e.target.value);
      },
    },
    {
      key: "phone",
      label: "Phone Number",
      validateTrigger: "onBlur",
      onChange: (e) => {
        handleChange("phone", e.target.value);
      },
    },
    {
      key: "email",
      label: "Email",
      required: true,
      validateTrigger: "onBlur",
      onChange: (e) => {
        handleChange("email", e.target.value);
      },
      rules: [{ type: "email", message: "Invalid email" }],
    },
    {
      key: "textarea",
      label: "Your Message",
      widget: "textarea",
      validateTrigger: "onBlur",
      onChange: (e) => {
        handleChange("message", e.target.value);
      },
    },
  ];

  return (
    <Form
      layout="horizontal"
      form={form}
      onFinish={handleFinish}
      style={{ width: "500px" }}
    >
      <fieldset>
        <legend>Contact Form</legend>
        <FormBuilder form={form} meta={meta1} />
      </fieldset>
      <Form.Item className="form-footer" wrapperCol={{ span: 16, offset: 8 }}>
        <Button disabled={status} htmlType="submit" type="primary">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
