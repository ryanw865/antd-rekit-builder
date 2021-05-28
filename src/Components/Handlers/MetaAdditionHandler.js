import React from "react";
import PasswordInput from "../CustomInput/CustomPasswordInput";
import CreditCardInput from "react-credit-card-input";
import {
  MailOutlined,
  UserOutlined,
  DownloadOutlined,
  LoadingOutlined,
  InboxOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import {
  Typography,
  Form,
  Button,
  Input,
  Select,
  Upload,
  Rate,
  message,
  Menu,
  DatePicker,
  Checkbox,
  Switch,
} from "antd";

const MetaAdditionHandler = ({
  setMetaFields,
  metaFields,
  field_type,
  field_id,
  preview_size,
  button_status,
  button_type,
  setFieldsCount,
  fieldsCount,
  field_name,
  field_placeholder,
  field_placeholder_2,
  deleteFieldButton,
  editFieldButton,
  icons_array,
  field_icon,
  field_pre,
  field_post,
  inputPostOptions,
  inputPreOptions,
  passField,
  onChangePassword,
  onChange,
  onChange2,
  indeterminate,
  onCheckAllChange,
  checkAll,
  button_name,
  selectInputOptions1,
  selectInputOptions2,
  selectInputOptions3,
  checkedList,
  plainOptions,
  toggleOnPlaceholder,
  toggleOffPlaceholder,
  zipCodeSwitch,
  CVVSwitch,
}) => {
  const { Option } = Select;
  const { Text } = Typography;
  const { TextArea } = Input;
  const { SubMenu } = Menu;
  const { Dragger } = Upload;
  const CheckboxGroup = Checkbox.Group;
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  setFieldsCount(fieldsCount + 1);
  if (field_type.substring(0, 5) === "input") {
    switch (field_id) {
      case 0: {
        setMetaFields([
          ...metaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: (props) => {
              return (
                <div>
                  <Input
                    size={preview_size}
                    placeholder={
                      field_placeholder
                        ? field_placeholder
                        : "Basic Input Field"
                    }
                  />
                  <br />
                </div>
              );
            },
            validateTrigger: "onBlur",
          },
        ]);
        break;
      }
      case 1: {
        setMetaFields([
          ...metaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: (props) => {
              return (
                <div>
                  <Input
                    size={preview_size}
                    addonAfter={icons_array[field_icon]}
                    placeholder={
                      field_placeholder
                        ? field_placeholder
                        : "Input With Post-Pended Icon"
                    }
                  />
                  <br />
                </div>
              );
            },
            validateTrigger: "onBlur",
          },
        ]);
        break;
      }
      case 2: {
        setMetaFields([
          ...metaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: (props) => {
              return (
                <div>
                  <Input
                    size={preview_size}
                    addonBefore={field_pre ? field_pre : "pre"}
                    addonAfter={field_post ? field_post : "post"}
                    placeholder={
                      field_placeholder
                        ? field_placeholder
                        : "Fixed Pre/Post-Pended Value"
                    }
                  />
                  <br />
                </div>
              );
            },
            validateTrigger: "onBlur",
          },
        ]);

        break;
      }

      case 3: {
        setMetaFields([
          ...metaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: (props) => {
              return (
                <div>
                  <Input
                    size={preview_size}
                    addonBefore={
                      <Select placeholder="Select" className="select-before">
                        {inputPreOptions.map((value) => {
                          return <Option value={value}>{value}</Option>;
                        })}
                      </Select>
                    }
                    addonAfter={
                      <Select placeholder="Select" className="select-after">
                        {inputPostOptions.map((value) => {
                          return <Option value={value}>{value}</Option>;
                        })}
                      </Select>
                    }
                    placeholder={
                      field_placeholder
                        ? field_placeholder
                        : "Variable Pre/Post-Pended Value"
                    }
                  />
                  <br />
                </div>
              );
            },
            validateTrigger: "onBlur",
          },
        ]);

        break;
      }

      case 4: {
        setMetaFields([
          ...metaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: (props) => {
              return (
                <div>
                  <Input.Group compact>
                    <Input
                      size={preview_size}
                      style={{ width: "20%" }}
                      placeholder={
                        field_placeholder_2 ? field_placeholder_2 : "0571"
                      }
                    />
                    <Input
                      size={preview_size}
                      style={{ width: "30%" }}
                      placeholder={
                        field_placeholder_2 ? field_placeholder_2 : "26888888"
                      }
                    />
                  </Input.Group>
                  <br />
                  <br />
                </div>
              );
            },
            validateTrigger: "onBlur",
          },
        ]);
        break;
      }

      case 5: {
        setMetaFields([
          ...metaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: (props) => {
              return (
                <div>
                  <Input.Group compact>
                    <Input.Search
                      size={preview_size}
                      style={{ width: "40%" }}
                      placeholder={
                        field_placeholder_2 ? field_placeholder_2 : "0571"
                      }
                    />
                    <Input.Search
                      size={preview_size}
                      allowClear
                      style={{ width: "40%" }}
                      placeholder={
                        field_placeholder_2 ? field_placeholder_2 : "26888888"
                      }
                    />
                  </Input.Group>
                  <br />
                  <br />
                </div>
              );
            },
            validateTrigger: "onBlur",
          },
        ]);
        break;
      }

      case 6: {
        setMetaFields([
          ...metaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: (props) => {
              return (
                <div>
                  <Input.Group compact>
                    <Input.Search
                      size={preview_size}
                      allowClear
                      style={{ width: "40%" }}
                      placeholder={
                        field_placeholder_2 ? field_placeholder_2 : "0571"
                      }
                    />
                    <Input.Search
                      size={preview_size}
                      allowClear
                      style={{ width: "40%" }}
                      placeholder={
                        field_placeholder_2 ? field_placeholder_2 : "26888888"
                      }
                    />
                  </Input.Group>
                  <br />
                  <br />
                </div>
              );
            },
            validateTrigger: "onBlur",
          },
        ]);
        break;
      }

      case 7: {
        setMetaFields([
          ...metaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: (props) => {
              return (
                <div>
                  <Input.Group compact>
                    <Select size={preview_size} placeholder="1">
                      <Option value="1">Between</Option>
                      <Option value="2">Except</Option>
                    </Select>
                    <Input
                      style={{ width: 100, textAlign: "center" }}
                      placeholder="Minimum"
                    />
                    <Input
                      size={preview_size}
                      className="site-input-split"
                      style={{
                        width: 30,
                        borderLeft: 0,
                        borderRight: 0,
                        pointerEvents: "none",
                      }}
                      placeholder="~"
                      disabled
                    />
                    <Input
                      className="site-input-right"
                      size={preview_size}
                      style={{
                        width: 100,
                        textAlign: "center",
                      }}
                      placeholder="Maximum"
                    />
                  </Input.Group>
                  <br />
                  <br />
                </div>
              );
            },
            validateTrigger: "onBlur",
          },
        ]);
        break;
      }

      case 8: {
        setMetaFields([
          ...metaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: (props) => {
              return (
                <div>
                  <TextArea rows={4} />
                  <br />
                </div>
              );
            },
            validateTrigger: "onBlur",
          },
        ]);
        break;
      }

      case 9: {
        setMetaFields([
          ...metaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: (props) => {
              return (
                <div>
                  <PasswordInput
                    type="password"
                    value={passField.pass}
                    onChange={(v) => onChangePassword({ pass: v })}
                  />
                  <br />
                </div>
              );
            },
            validateTrigger: "onBlur",
          },
        ]);
        break;
      }

      case 10: {
        setMetaFields([
          ...metaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            validator: (rule, value, callback) => {
              return new Promise((resolve, reject) => {
                if (
                  value.includes("@") === false &&
                  value.includes(".com") === false
                ) {
                  reject(new Error("Email format must be abc@def.com"));
                } else {
                  resolve();
                }
              });
            },
            widget: (props) => {
              return (
                <div>
                  <Form name="basic">
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          required: true,
                          type: `email`,
                          message: "Please input email format!",
                        },
                      ]}
                    >
                      <Input
                        size={preview_size}
                        style={{
                          width: "25vw",
                        }}
                        placeholder={
                          field_placeholder
                            ? field_placeholder
                            : "Email Input Field"
                        }
                      />
                    </Form.Item>
                  </Form>
                  <br />
                </div>
              );
            },
            validateTrigger: "onBlur",
          },
        ]);
        break;
      }
    }
  } else if (field_type === "checkbox") {
    switch (field_id) {
      case 0: {
        setMetaFields([
          ...metaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: (props) => {
              return (
                <div>
                  <Checkbox size={preview_size} onChange={onChange}>
                    {field_placeholder ? field_placeholder : "Checkbox"}
                  </Checkbox>
                  <br />
                </div>
              );
            },
            validateTrigger: "onBlur",
          },
        ]);
        break;
      }

      case 1: {
        setMetaFields([
          ...metaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: (props) => {
              return (
                <div>
                  <Checkbox
                    size={preview_size}
                    indeterminate={indeterminate}
                    onChange={onCheckAllChange}
                    checked={checkAll}
                  >
                    {field_placeholder ? field_placeholder : "Checkbox"}
                  </Checkbox>
                  <br />
                  <br />
                  <CheckboxGroup
                    size={preview_size}
                    options={plainOptions}
                    value={checkedList}
                    onChange={onChange2}
                  />
                  <br />
                </div>
              );
            },
            validateTrigger: "onBlur",
          },
        ]);
        break;
      }
    }
  } else if (field_type === "select") {
    switch (field_id) {
      case 0: {
        setMetaFields([
          ...metaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: (props) => {
              return (
                <div>
                  <Input.Group size={preview_size} compact>
                    <Select placeholder="Select  " size={preview_size}>
                      {selectInputOptions1.map((value) => (
                        <Option value={value}>{value}</Option>
                      ))}
                    </Select>
                    <Input
                      style={{ width: "79.5%" }}
                      size={preview_size}
                      placeholder="Input field with pre-pended option"
                    />
                  </Input.Group>
                  <br />
                </div>
              );
            },
            validateTrigger: "onBlur",
          },
        ]);
        break;
      }

      case 1: {
        setMetaFields([
          ...metaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: (props) => {
              return (
                <div>
                  <Input.Group compact size={preview_size}>
                    <Select defaultValue="Select  " size={preview_size}>
                      {selectInputOptions2.map((value) => (
                        <Option value={value}>{value}</Option>
                      ))}
                    </Select>
                    <Select defaultValue="Select  " size={preview_size}>
                      {selectInputOptions3.map((value) => (
                        <Option value={value}>{value}</Option>
                      ))}
                    </Select>
                  </Input.Group>
                  <br />
                </div>
              );
            },
            validateTrigger: "onBlur",
          },
        ]);
        break;
      }

      case 2: {
        setMetaFields([
          ...metaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: (props) => {
              return (
                <div>
                  <Input.Group compact>
                    <Input
                      style={{ width: "50%" }}
                      placeholder="input content"
                    />
                    <DatePicker style={{ width: "50%" }} />
                  </Input.Group>
                </div>
              );
            },
            validateTrigger: "onBlur",
          },
        ]);

        break;
      }
      case 3: {
        setMetaFields([
          ...metaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: (props) => {
              return (
                <div>
                  <Input.Group compact>
                    <Input
                      style={{ width: "30%" }}
                      placeholder="input content"
                    />
                    <DatePicker.RangePicker style={{ width: "70%" }} />
                  </Input.Group>
                  <br />
                  <br />
                </div>
              );
            },
            validateTrigger: "onBlur",
          },
        ]);

        break;
      }

      case 4: {
        setMetaFields([
          ...metaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: (props) => {
              return (
                <div>
                  <Rate />
                  <br />
                  <br />
                </div>
              );
            },
            validateTrigger: "onBlur",
          },
        ]);

        break;
      }
    }
  } else if (field_type === "button") {
    switch (field_id) {
      case 0: {
        setMetaFields([
          ...metaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: (props) => {
              return (
                <div>
                  {button_status ? (
                    <Button type={button_type}>
                      {button_name ? button_name : "Default"}
                    </Button>
                  ) : (
                    <Button type={button_type} disabled>
                      {button_name ? button_name : "Default(disabled)"}
                    </Button>
                  )}
                  <br />
                </div>
              );
            },
            validateTrigger: "onBlur",
          },
        ]);
        break;
      }

      case 1: {
        setMetaFields([
          ...metaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: (props) => {
              return (
                <div>
                  <Button type="primary" loading>
                    {button_name ? button_name : "Loading"}
                  </Button>
                  <br />
                </div>
              );
            },
            validateTrigger: "onBlur",
          },
        ]);
        break;
      }

      case 2: {
        setMetaFields([
          ...metaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: (props) => {
              return (
                <div>
                  <Button type="primary" icon={<DownloadOutlined />}>
                    {button_name ? button_name : "Download"}
                  </Button>
                  <br />
                </div>
              );
            },
            validateTrigger: "onBlur",
          },
        ]);
        break;
      }

      case 3: {
        setMetaFields([
          ...metaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: (props) => {
              return (
                <div>
                  <Switch
                    checkedChildren={
                      toggleOnPlaceholder ? toggleOnPlaceholder : "disabled"
                    }
                    unCheckedChildren={
                      toggleOffPlaceholder ? toggleOffPlaceholder : "enabled"
                    }
                  />
                </div>
              );
            },
            validateTrigger: "onBlur",
          },
        ]);

        break;
      }
    }
  } else if (field_type === "predefined") {
    switch (field_id) {
      case 0: {
        setMetaFields([
          ...metaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: (props) => {
              return (
                <div>
                  <Input.Group compact>
                    <Input
                      size={preview_size}
                      allowClear
                      style={{ width: "60%" }}
                      placeholder="Card Number"
                    />
                    <Input
                      size={preview_size}
                      allowClear
                      style={{ width: "20%" }}
                      placeholder="MM/YY"
                    />
                    {CVVSwitch ? (
                      <Input
                        size={preview_size}
                        allowClear
                        style={{ width: "20%" }}
                        placeholder="CVV"
                      />
                    ) : null}
                    <br />
                    {zipCodeSwitch ? (
                      <Input
                        size={preview_size}
                        allowClear
                        style={{ width: "30%" }}
                        placeholder="ZIP"
                      />
                    ) : null}
                  </Input.Group>
                  <br />
                </div>
              );
            },
            validateTrigger: "onBlur",
          },
        ]);
        break;
      }
      case 1: {
        setMetaFields([
          ...metaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: (props) => {
              return (
                <div>
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
                      rules={[
                        {
                          required: true,
                          message: `Please enter your name.`,
                        },
                      ]}
                      name="name"
                    >
                      <Input
                        placeholder="Name"
                        prefix={
                          <UserOutlined className="site-form-item-icon" />
                        }
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
                        prefix={
                          <MailOutlined className="site-form-item-icon" />
                        }
                      />
                    </Form.Item>

                    <Form.Item
                      label="Message"
                      rules={[
                        {
                          required: true,
                          message: `Please enter your message.`,
                        },
                      ]}
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
                </div>
              );
            },
            validateTrigger: "onBlur",
          },
        ]);
        break;
      }
      case 2: {
        setMetaFields([
          ...metaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: (props) => {
              return (
                <div>
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
                </div>
              );
            },
            validateTrigger: "onBlur",
          },
        ]);
        break;
      }
      case 3: {
        setMetaFields([
          ...metaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: (props) => {
              return (
                <div>
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
                      rules={[
                        {
                          required: true,
                          message: `Please enter your Username.`,
                        },
                      ]}
                      name="Username"
                    >
                      <Input
                        placeholder="Username"
                        prefix={
                          <UserOutlined className="site-form-item-icon" />
                        }
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
                        prefix={
                          <MailOutlined className="site-form-item-icon" />
                        }
                      />
                    </Form.Item>
                    <Form.Item>
                      <Button type="primary" htmlType="submit" disabled={false}>
                        Login
                      </Button>
                    </Form.Item>
                  </Form>
                  <br />
                </div>
              );
            },
            validateTrigger: "onBlur",
          },
        ]);
        break;
      }
    }
  }
};

export default MetaAdditionHandler;
