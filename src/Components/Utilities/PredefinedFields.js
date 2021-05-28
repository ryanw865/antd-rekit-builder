import React from "react";
import axios from "axios";
import { Input, Form, Upload, Button, Divider, Typography } from "antd";
import {
  UserOutlined,
  LoadingOutlined,
  InboxOutlined,
  PlusOutlined,
  MailOutlined,
} from "@ant-design/icons";

const PredefinedFields = ({ handlePreviewField, currentSelectedType }) => {
  const { TextArea } = Input;
  const { Dragger } = Upload;
  const { Text } = Typography;
  const [usernameResponse, setUsernameResponse] = React.useState("");
  const [passwordResponse, setPasswordResponse] = React.useState("");
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  const addButton = (id, type) => {
    return (
      <Button
        onClick={() => {
          handlePreviewField(`${type}`, id);
        }}
      >
        Configure
      </Button>
    );
  };
  return (
    <div>
      <h3>Credit Card Input</h3>
      <br />
      <Input.Group compact>
        <Input allowClear style={{ width: "60%" }} placeholder="Card Number" />
        <Input allowClear style={{ width: "20%" }} placeholder="MM/YY" />
        <Input allowClear style={{ width: "20%" }} placeholder="CVV" />
        <br />
        <Input allowClear style={{ width: "30%" }} placeholder="ZIP" />
      </Input.Group>
      <br />
      <br />
      {addButton(0, "predefined")}
      <Divider />
      <h3>Contact Form</h3>
      <br />

      <Form name="cf" method="post" layout="vertical">
        <Form.Item
          label="Don't fill this out"
          className={`hidden`}
          style={{ display: `none` }}
          name="bot-field"
        >
          <Input type={`hidden`} />
        </Form.Item>

        <Form.Item
          label="Name"
          rules={[{ required: true, message: `Please enter your name.` }]}
          name="name"
        >
          <Input
            placeholder="Name"
            prefix={<UserOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Form.Item
          label="Email"
          rules={[
            {
              required: true,
              type: `email`,
              message: `Please enter your email.`,
            },
          ]}
          name="email"
        >
          <Input
            placeholder="Your Email"
            prefix={<MailOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Form.Item
          label="Message"
          rules={[{ required: true, message: `Please enter your message.` }]}
          name="message"
        >
          <TextArea placeholder="Your Message" rows={5} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={false}>
            Send
          </Button>
        </Form.Item>
      </Form>
      <br />
      {addButton(1, "predefined")}
      <Divider />
      <h3>Upload Field</h3>
      <br />
      <Dragger>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Please click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or multiple file upload.
        </p>
      </Dragger>

      {addButton(2, "predefined")}
      <Divider />
      <h3>Sign-in Form</h3>
      <br />
      <br />
      <Form name="cf" method="post" layout="vertical">
        <Form.Item
          label="Don't fill this out"
          className={`hidden`}
          style={{ display: `none` }}
          name="bot-field"
        >
          <Input type={`hidden`} />
        </Form.Item>

        <Form.Item
          label="Username"
          rules={[{ required: true, message: `Please enter your Username.` }]}
          name="Username"
        >
          <Input
            placeholder="Username"
            prefix={<UserOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          rules={[
            {
              required: true,
              type: `Password`,
              message: `Please enter your Password.`,
            },
          ]}
          name="Password"
        >
          <Input
            placeholder="Your Password"
            prefix={<MailOutlined className="site-form-item-icon" />}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={false}>
            Login
          </Button>
        </Form.Item>
      </Form>
      <br />
      {addButton(3, "predefined")}
      <Divider />

      <h3>Password Async Validation</h3>
      <Input.Group compact>
        <Input
          placeholder="Please enter a new password"
          onBlur={(e) => {
            axios({
              method: "post",
              url: "/password",
              data: {
                password: e.target.value,
              },
            }).then(
              (response) => {
                setPasswordResponse(response.data);
              },
              (error) => {
                console.log(error);
              }
            );
          }}
        />
      </Input.Group>

      {passwordResponse === "weak" ? (
        <Text type="danger">{passwordResponse}</Text>
      ) : passwordResponse === "medium" ? (
        <Text type="danger">{passwordResponse}</Text>
      ) : passwordResponse === "strong" ? (
        <Text type="success">{passwordResponse}</Text>
      ) : null}

      <br />
      {addButton(4, "predefined")}
      <Divider />

      <h3>Username Async Validation</h3>
      <Input.Group compact>
        <Input
          placeholder="Please enter a new username"
          onBlur={(e) => {
            axios({
              method: "post",
              url: "/username",
              data: {
                username: e.target.value,
              },
            }).then(
              (response) => {
                setUsernameResponse(response.data);
              },
              (error) => {
                console.log(error);
              }
            );
          }}
        />
      </Input.Group>
      {usernameResponse === "unavailable" ? (
        <Text type="danger">{usernameResponse}</Text>
      ) : usernameResponse === "available" ? (
        <Text type="success">{usernameResponse}</Text>
      ) : null}
      <br />
      {addButton(5, "predefined")}
      <Divider />

      <br />
      <br />
    </div>
  );
};
export default PredefinedFields;
