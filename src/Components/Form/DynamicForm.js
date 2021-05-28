import React, { useCallback } from "react";
import FormBuilder from "antd-form-builder";
import { ExportOutlined, UploadOutlined } from "@ant-design/icons";
import InputFields from "../Utilities/InputFields";
import RadioCheckboxes from "../Utilities/RadioCheckboxes";
import ButtonFields from "../Utilities/ButtonFields";
import SelectFields from "../Utilities/SelectFields";
import PredefinedFields from "../Utilities/PredefinedFields";
import swal from "sweetalert";
import PasswordInput from "../CustomInput/CustomPasswordInput";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  UserOutlined,
  LoadingOutlined,
  InboxOutlined,
  PlusOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import MetaPreviewHandler from "../Handlers/MetaPreviewHandler";
import MetaAdditionHandler from "../Handlers/MetaAdditionHandler";
// import MetaStringHandler from "../Handlers/MetaStringHandler";
// import MetaStringHandlerTest from "../Handlers/MetaStringHandler2";
import PopupOptions from "../Handlers/PopupOptions";
import exportFromJSON from "export-from-json";
import {
  InputNumber,
  DatePicker,
  AutoComplete,
  Rate,
  Typography,
  Upload,
  Form,
  Input,
  Select,
  Modal,
  Switch,
  Checkbox,
  Row,
  Col,
  Divider,
  Space,
  Menu,
  Button,
} from "antd";

const MetaStringHandlerTest = ({
  setStringMetaFields,
  stringMetaFields,
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
        setStringMetaFields([
          ...stringMetaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: ((props) => {
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
            }).toString(),
            validateTrigger: "onBlur",
          },
        ]);
        break;
      }
      case 1: {
        setStringMetaFields([
          ...stringMetaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: ((props) => {
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
            }).toString(),
            validateTrigger: "onBlur",
          },
        ]);
        break;
      }
      case 2: {
        setStringMetaFields([
          ...stringMetaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: ((props) => {
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
            }).toString(),
            validateTrigger: "onBlur",
          },
        ]);

        break;
      }

      case 3: {
        setStringMetaFields([
          ...stringMetaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: ((props) => {
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
            }).toString(),
            validateTrigger: "onBlur",
          },
        ]);

        break;
      }

      case 4: {
        setStringMetaFields([
          ...stringMetaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: ((props) => {
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
            }).toString(),
            validateTrigger: "onBlur",
          },
        ]);
        break;
      }

      case 5: {
        setStringMetaFields([
          ...stringMetaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: ((props) => {
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
            }).toString(),
            validateTrigger: "onBlur",
          },
        ]);
        break;
      }

      case 6: {
        setStringMetaFields([
          ...stringMetaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: ((props) => {
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
            }).toString(),
            validateTrigger: "onBlur",
          },
        ]);
        break;
      }

      case 7: {
        setStringMetaFields([
          ...stringMetaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: ((props) => {
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
            }).toString(),
            validateTrigger: "onBlur",
          },
        ]);
        break;
      }

      case 8: {
        setStringMetaFields([
          ...stringMetaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: ((props) => {
              return (
                <div>
                  <TextArea rows={4} />
                  <br />
                </div>
              );
            }).toString(),
            validateTrigger: "onBlur",
          },
        ]);
        break;
      }

      case 9: {
        setStringMetaFields([
          ...stringMetaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: ((props) => {
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
            }).toString(),
            validateTrigger: "onBlur",
          },
        ]);
        break;
      }

      case 10: {
        setStringMetaFields([
          ...stringMetaFields,
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
            widget: ((props) => {
              return (
                <div>
                  <Input.Group compact>
                    <Input
                      size={preview_size}
                      style={{
                        width: "30vw",
                      }}
                      placeholder={
                        field_placeholder
                          ? field_placeholder
                          : "Email Input Field"
                      }
                    />
                  </Input.Group>
                  <br />
                </div>
              );
            }).toString(),
            validateTrigger: "onBlur",
          },
        ]);
        break;
      }
    }
  } else if (field_type === "checkbox") {
    switch (field_id) {
      case 0: {
        setStringMetaFields([
          ...stringMetaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: ((props) => {
              return (
                <div>
                  <Checkbox size={preview_size} onChange={onChange}>
                    {field_placeholder ? field_placeholder : "Checkbox"}
                  </Checkbox>
                  <br />
                </div>
              );
            }).toString(),
            validateTrigger: "onBlur",
          },
        ]);
        break;
      }

      case 1: {
        setStringMetaFields([
          ...stringMetaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: ((props) => {
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
            }).toString(),
            validateTrigger: "onBlur",
          },
        ]);
        break;
      }
    }
  } else if (field_type === "select") {
    switch (field_id) {
      case 0: {
        setStringMetaFields([
          ...stringMetaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: ((props) => {
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
            }).toString(),
            validateTrigger: "onBlur",
          },
        ]);
        break;
      }

      case 1: {
        setStringMetaFields([
          ...stringMetaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: ((props) => {
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
            }).toString(),
            validateTrigger: "onBlur",
          },
        ]);
        break;
      }

      case 2: {
        setStringMetaFields([
          ...stringMetaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: ((props) => {
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
            }).toString(),
            validateTrigger: "onBlur",
          },
        ]);

        break;
      }
      case 3: {
        setStringMetaFields([
          ...stringMetaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: ((props) => {
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
            }).toString(),
            validateTrigger: "onBlur",
          },
        ]);

        break;
      }

      case 4: {
        setStringMetaFields([
          ...stringMetaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: ((props) => {
              return (
                <div>
                  <Rate />
                  <br />
                  <br />
                </div>
              );
            }).toString(),
            validateTrigger: "onBlur",
          },
        ]);

        break;
      }
    }
  } else if (field_type === "button") {
    switch (field_id) {
      case 0: {
        setStringMetaFields([
          ...stringMetaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: ((props) => {
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
            }).toString(),
            validateTrigger: "onBlur",
          },
        ]);
        break;
      }

      case 1: {
        setStringMetaFields([
          ...stringMetaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: ((props) => {
              return (
                <div>
                  <Button type="primary" loading>
                    {button_name ? button_name : "Loading"}
                  </Button>
                  <br />
                </div>
              );
            }).toString(),
            validateTrigger: "onBlur",
          },
        ]);
        break;
      }

      case 2: {
        setStringMetaFields([
          ...stringMetaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: ((props) => {
              return (
                <div>
                  <Button type="primary" icon={<DownloadOutlined />}>
                    {button_name ? button_name : "Download"}
                  </Button>
                  <br />
                </div>
              );
            }).toString(),
            validateTrigger: "onBlur",
          },
        ]);
        break;
      }

      case 3: {
        setStringMetaFields([
          ...stringMetaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: ((props) => {
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
            }).toString(),
            validateTrigger: "onBlur",
          },
        ]);

        break;
      }
    }
  } else if (field_type === "predefined") {
    switch (field_id) {
      case 0: {
        setStringMetaFields([
          ...stringMetaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: ((props) => {
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
            }).toString(),
            validateTrigger: "onBlur",
          },
        ]);
        break;
      }
      case 1: {
        setStringMetaFields([
          ...stringMetaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: ((props) => {
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
            }).toString(),
            validateTrigger: "onBlur",
          },
        ]);
        break;
      }
      case 2: {
        setStringMetaFields([
          ...stringMetaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: ((props) => {
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
            }).toString(),
            validateTrigger: "onBlur",
          },
        ]);
        break;
      }
      case 3: {
        setStringMetaFields([
          ...stringMetaFields,
          {
            key: "key",
            label: field_name,
            colSpan: 4,
            widget: ((props) => {
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
            }).toString(),
            validateTrigger: "onBlur",
          },
        ]);
        break;
      }
    }
  }
};

const DynamicForm = () => {
  const temp = {
    key: "key",
    label: "field_name",
    colSpan: 4,
    widget: ((props) => {
      return (
        <div>
          <Input
            size={"preview_size"}
            placeholder={
              "field_placeholder" ? "field_placeholder" : "Basic Input Field"
            }
          />
          <br />
        </div>
      );
    }).toString(),
    validateTrigger: "onBlur",
  };
  const { Option } = Select;
  const { Text } = Typography;
  const { TextArea } = Input;
  const { SubMenu } = Menu;
  const forceUpdate = FormBuilder.useForceUpdate();

  const [fieldType, setFieldType] = React.useState({ key: "input:basic" });
  const [currentFieldName, setCurrentFieldName] = React.useState("");
  const [fieldsCount, setFieldsCount] = React.useState(0);
  const [validationsDone, setValidationsDone] = React.useState(true);

  const incrementFieldCount = () => {
    setFieldsCount(fieldsCount + 1);
  };
  const decrementFieldCount = () => {
    setFieldsCount(fieldsCount - 1);
  };
  const [metaFields, setMetaFields] = React.useState([]);
  const [stringMetaFields, setStringMetaFields] = React.useState([]);
  const [stringMeta, setStringMeta] = React.useState({
    columns: 4,
    formItemLayout: null,
    colon: true,
    fields: stringMetaFields,
  });
  const [metaCurrentFields, setMetaCurrentFields] = React.useState([]);
  const [status, setStatus] = React.useState("");
  const [viewJson, setViewJson] = React.useState(false);
  const [editJson, setEditJson] = React.useState(false);
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [isModal2Visible, setIsModal2Visible] = React.useState(false);

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk2 = () => {
    setIsModal2Visible(false);
  };

  const handleCancel2 = () => {
    setIsModal2Visible(false);
  };
  const showModal2 = () => {
    setIsModal2Visible(true);
  };
  const [meta, setMeta] = React.useState({
    columns: 4,
    formItemLayout: null,
    colon: true,
    fields: metaFields,
  });
  const [metaRecent, setMetaRecent] = React.useState({
    columns: 4,
    formItemLayout: null,
    colon: true,
    fields: metaCurrentFields,
  });

  const [showPreview, setShowPreview] = React.useState(false);
  const [field_type, set_field_type] = React.useState("input:basic");
  const [field_name, set_field_name] = React.useState("");
  const [field_placeholder, set_field_placeholder] = React.useState("");
  const [field_placeholder_2, set_field_placeholder_2] = React.useState("");
  const [field_pre, set_field_pre] = React.useState("");
  const [field_post, set_field_post] = React.useState("");
  const [field_icon, set_field_icon] = React.useState(0);
  const [button_name, set_button_name] = React.useState("");
  const [field_id, set_field_id] = React.useState(-1);
  const [button_status, set_button_status] = React.useState(false);
  const [button_type, set_button_type] = React.useState("primary");
  const [preview_size, set_preview_size] = React.useState("small");
  const [passField, setPassField] = React.useState({ pass: "" });
  const [selectInputOptions1, setSelectInputOptions1] = React.useState([
    "Option1",
    "Option2",
  ]);
  const [selectInputOptions2, setSelectInputOptions2] = React.useState([
    "Option1",
    "Option2",
  ]);
  const [selectInputOptions3, setSelectInputOptions3] = React.useState([
    "Option1",
    "Option2",
  ]);

  const [inputPreOptions, setInputPreOptions] = React.useState([
    "pre1",
    "pre2",
  ]);
  const [inputPostOptions, setInputPostOptions] = React.useState([
    "post1",
    "post2",
  ]);

  const onChangePassword = (value) => {
    setPassField(value);
  };
  const icons_array = [
    <SettingOutlined />,
    <AppstoreOutlined />,
    <MailOutlined />,
    <DownloadOutlined />,
  ];
  const [plainOptions, setPlainOptions] = React.useState([
    "Apple",
    "Pear",
    "Orange",
  ]);
  const [temporaryField1, setTemporaryField1] = React.useState("");
  const [temporaryField2, setTemporaryField2] = React.useState("");
  const [checkedList, setCheckedList] = React.useState([]);
  const [indeterminate, setIndeterminate] = React.useState(true);
  const [checkAll, setCheckAll] = React.useState(false);
  const [zipCodeSwitch, setZipCodeSwitch] = React.useState(false);
  const [requiredFieldSwitch, setRequiredFieldSwitch] = React.useState(false);
  const [CVVSwitch, setCVVSwitch] = React.useState(false);
  const [toggleOnPlaceholder, setToggleOnPlaceholder] = React.useState("");
  const [toggleOffPlaceholder, setToggleOffPlaceholder] = React.useState("");
  const onChangeZipCodeSwitch = (checked) => {
    setZipCodeSwitch(checked);
  };

  const onChangeFieldRequiredSwitch = (checked) => {
    setRequiredFieldSwitch(checked);
  };

  const onChangeCVVSwitch = (checked) => {
    setCVVSwitch(checked);
  };

  function onChange(e) {}

  const onChange2 = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const deleteFieldButton = (id) => {
    // return <DeleteOutlined style={{ marginLeft: "100px", color: "red" }} />;
  };
  const editFieldButton = (id) => {};
  // const PassInput = ({ label, value, onChange }) =>
  // value ? (
  //   <PasswordInput
  //     type="password"
  //     value={value.pass}
  //     onChange={(v) => onChange({ pass: v })}
  //   />
  // ) : null;

  // const emailInput = (key, label, id) => ({
  //   key: key,
  //   label: label,
  //   colSpan: 4,
  //   widget: "input",
  //   validateTrigger: "onBlur",
  //   rules: [
  //     {
  //       validator: (rule, value, callback) => {
  //         return new Promise((resolve, reject) => {
  //           if (
  //             value.includes("@") === false &&
  //             value.includes(".com") === false
  //           ) {
  //             reject(new Error("Email format must be abc@def.com"));
  //           } else {
  //             resolve();
  //           }
  //         });
  //       },
  //     },
  //   ],
  // });
  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  const onChangeSwitchButtonOption = (checked) => {
    set_button_status(checked);
  };
  const onChangeButtonTypeOption = (selected) => {
    set_button_type(selected);
  };

  const selectBefore = (
    <Select placeholder="pre" className="select-before">
      <Option value="pre1">pre1</Option>
      <Option value="pre2">pre2</Option>
    </Select>
  );
  const selectAfter = (
    <Select placeholder="post" className="select-after">
      <Option value="post1">post1</Option>
      <Option value="post2">post2</Option>
      <Option value="post3">post3</Option>
      <Option value="post4">post4</Option>
    </Select>
  );
  const handlePreviewField = (fieldType, fieldId) => {
    set_field_type(fieldType);
    set_field_id(fieldId);
    showModal();
  };

  React.useEffect(() => {
    setMeta({
      columns: 4,
      formItemLayout: null,
      colon: true,
      fields: metaFields,
    });
    setStringMeta({
      columns: 4,
      formItemLayout: null,
      colon: true,
      fields: stringMetaFields,
    });
  }, [metaFields]);

  const onChangeSwitchViewJson = (checked) => {
    setViewJson(checked);
  };
  const onChangeSwitchEditJson = (checked) => {
    setEditJson(checked);
  };

  const handleFinish = useCallback((values) => {});

  const handleDelete = (id) => {
    const newmeta = metaFields.filter(
      (item, index) => index !== metaFields.length - 1
    );
    newmeta.filter((item, index) => index !== newmeta.length - 1);

    setMetaFields(newmeta);

    const newmeta2 = stringMetaFields.filter(
      (item, index) => index !== stringMetaFields.length - 1
    );
    newmeta2.filter((item, index) => index !== newmeta2.length - 1);

    setStringMetaFields(newmeta2);

    setFieldsCount(fieldsCount - 1);
  };

  React.useEffect(() => {
    setMetaRecent({
      columns: 4,
      formItemLayout: null,
      colon: true,
      fields: metaCurrentFields,
    });
  }, [fieldType, currentFieldName, metaCurrentFields]);

  const uploadProps = {
    action: "//jsonplaceholder.typicode.com/posts/",
    name: "file",
    headers: {
      authorization: "authorization-text",
    },
    maxCount: 1,
    beforeUpload: (file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const jsonExtract = JSON.parse(e.target.result);
        console.log("jsonExtract.fields", jsonExtract.fields);
        setStringMetaFields(jsonExtract.fields);

        let tempArray = metaFields;
        let tempCount = fieldsCount + jsonExtract.fields.length;

        jsonExtract.fields.map((value) => {
          tempCount++;
          const tempFunc = value["widget"];
          const func2 = eval(tempFunc);
          tempArray = [
            ...tempArray,
            {
              key: value["key"],
              label: value["label"],
              colSpan: value["colSpan"],
              widget: func2,
            },
          ];
        });
        setFieldsCount(tempCount);

        setMetaFields(tempArray);
      };
      reader.readAsText(file);

      // Prevent upload
      return false;
    },
  };
  const [currentSelectedType, setCurrentSelectedType] =
    React.useState("default");
  const MenuClickHandler = (e) => {
    setCurrentSelectedType(e.key);
  };
  const handleOk = () => {
    MetaStringHandlerTest({
      setStringMetaFields,
      stringMetaFields,
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
    });
    MetaAdditionHandler({
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
    });
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal
        title="Field Preview"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <br />
        <h4>{field_name}</h4>
        {!showPreview === true ? (
          <Form layout="horizontal" form={form} onFinish={handleFinish}>
            <fieldset>
              <MetaPreviewHandler
                field_type={field_type}
                field_id={field_id}
                preview_size={preview_size}
                button_status={button_status}
                button_type={button_type}
                setFieldsCount={setFieldsCount}
                fieldsCount={fieldsCount}
                field_name={field_name}
                field_placeholder={field_placeholder}
                field_placeholder_2={field_placeholder_2}
                deleteFieldButton={deleteFieldButton}
                editFieldButton={editFieldButton}
                icons_array={icons_array}
                field_icon={field_icon}
                field_pre={field_pre}
                field_post={field_post}
                inputPostOptions={inputPostOptions}
                inputPreOptions={inputPreOptions}
                passField={passField}
                onChangePassword={onChangePassword}
                onChange={onChange}
                onChange2={onChange2}
                indeterminate={indeterminate}
                onCheckAllChange={onCheckAllChange}
                checkAll={checkAll}
                button_name={button_name}
                selectInputOptions1={selectInputOptions1}
                selectInputOptions2={selectInputOptions2}
                selectInputOptions3={selectInputOptions3}
                checkedList={checkedList}
                plainOptions={plainOptions}
                toggleOnPlaceholder={toggleOnPlaceholder}
                toggleOffPlaceholder={toggleOffPlaceholder}
                zipCodeSwitch={zipCodeSwitch}
                CVVSwitch={CVVSwitch}
              />
            </fieldset>
            <br />
            <br />
          </Form>
        ) : null}
        <Divider />
        <PopupOptions
          field_type={field_type}
          field_id={field_id}
          inputPostOptions={inputPostOptions}
          inputPreOptions={inputPreOptions}
          plainOptions={plainOptions}
          setPlainOptions={setPlainOptions}
          set_button_name={set_button_name}
          set_field_name={set_field_name}
          set_field_placeholder={set_field_placeholder}
          set_field_placeholder_2={set_field_placeholder_2}
          set_preview_size={set_preview_size}
          set_field_icon={set_field_icon}
          set_field_pre={set_field_pre}
          set_field_post={set_field_post}
          onChangeZipCodeSwitch={onChangeZipCodeSwitch}
          onChangeFieldRequiredSwitch={onChangeFieldRequiredSwitch}
          onChangeCVVSwitch={onChangeCVVSwitch}
          setInputPreOptions={setInputPreOptions}
          setInputPostOptions={setInputPostOptions}
          temporaryField1={temporaryField1}
          temporaryField2={temporaryField2}
          setTemporaryField1={setTemporaryField1}
          setTemporaryField2={setTemporaryField2}
          onChangeSwitchButtonOption={onChangeSwitchButtonOption}
          selectInputOptions1={selectInputOptions1}
          selectInputOptions2={selectInputOptions2}
          selectInputOptions3={selectInputOptions3}
          setSelectInputOptions1={setSelectInputOptions1}
          setSelectInputOptions2={setSelectInputOptions2}
          setSelectInputOptions3={setSelectInputOptions3}
          onChangeButtonTypeOption={onChangeButtonTypeOption}
          toggleOnPlaceholder={toggleOnPlaceholder}
          toggleOffPlaceholder={toggleOffPlaceholder}
          setToggleOnPlaceholder={setToggleOnPlaceholder}
          setToggleOffPlaceholder={setToggleOffPlaceholder}
        />
      </Modal>
      <Row style={{ width: "70vw" }} gutter={32}>
        <Col span={12}>
          <Row>
            <h1>ANTD Rekit Form Builder</h1>
          </Row>
          <Menu
            onClick={MenuClickHandler}
            selectedKeys={currentSelectedType}
            mode="horizontal"
          >
            <SubMenu key="input" title="Input">
              <Menu.ItemGroup title="Simple">
                <Menu.Item key="input:basic">Basic</Menu.Item>
                <Menu.Item key="input:numeric">Numeric</Menu.Item>
                <Menu.Item key="input:multi">Multi-line</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="Validations">
                <Menu.Item key="input:password">Password</Menu.Item>
                <Menu.Item key="input:email">Email</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item key="radio">Radio/Checkboxes</Menu.Item>
            <Menu.Item key="select">Select</Menu.Item>
            <Menu.Item key="buttons">Buttons</Menu.Item>
            <Menu.Item key="predef">Predefined</Menu.Item>
          </Menu>
          <Divider />
          <Space wrap>
            {currentSelectedType.substring(0, 5) === "input" ? (
              <InputFields
                handlePreviewField={handlePreviewField}
                currentSelectedType={currentSelectedType}
              />
            ) : currentSelectedType === "radio" ? (
              <RadioCheckboxes handlePreviewField={handlePreviewField} />
            ) : currentSelectedType === "select" ? (
              <SelectFields handlePreviewField={handlePreviewField} />
            ) : currentSelectedType === "buttons" ? (
              <ButtonFields handlePreviewField={handlePreviewField} />
            ) : currentSelectedType === "predef" ? (
              <PredefinedFields handlePreviewField={handlePreviewField} />
            ) : currentSelectedType === "default" ? (
              <>
                <h1>
                  <Text type="success">Welcome to ANTD Rekit Form Builder</Text>
                </h1>
                <h3>
                  <Text type="secondary">
                    Please select an input type from the menu above.
                  </Text>
                </h3>
                <h3>
                  <Text type="secondary">
                    When you see the input you want, click "Configure" and edit
                    the options to fit your form.
                  </Text>
                </h3>
                <h3>
                  <Text type="secondary">
                    When your input field is finished, click "Ok" and the
                    element will be added to the form to the right.
                  </Text>
                </h3>
                <h3>
                  <Text type="secondary">
                    If you've made a mistake, click "Remove" to delete the
                    element.
                  </Text>
                </h3>
                <h3>
                  <Text type="secondary">
                    When your form is complete, click "Export as JSON" or simply
                    copy and paste the "Meta as JSON".
                  </Text>
                </h3>
              </>
            ) : null}
          </Space>
        </Col>
        <Col span={12} style={{ paddingTop: "60px" }}>
          <Divider />
          <Form layout="horizontal" form={form} onFinish={handleFinish}>
            <fieldset>
              <legend>Form</legend>
              <FormBuilder
                form={form}
                meta={meta}
                onValuesChange={forceUpdate}
              />
            </fieldset>
            <Form.Item
              className="form-footer"
              wrapperCol={{ span: 32, offset: 8 }}
            >
              {fieldsCount > 0 ? (
                <>
                  <Button
                    type="primary"
                    style={{ margin: "5px" }}
                    onClick={() => {
                      if (validationsDone === true)
                        swal("Success!", "Form Submitted!", "success");
                      else if (validationsDone === false)
                        swal(
                          "Warning!",
                          "Some validations were not followed!",
                          "warning"
                        );
                    }}
                  >
                    Submit
                  </Button>
                  <Button
                    type="danger"
                    style={{ margin: "5px" }}
                    onClick={() => handleDelete(fieldsCount - 1)}
                  >
                    Remove
                  </Button>
                </>
              ) : (
                <h2>
                  <Text disabled>Form Empty</Text>
                </h2>
              )}
            </Form.Item>
          </Form>
          <Divider />
          <Row>
            <h3>Meta Data for the Form</h3>
          </Row>
          <Row>
            <Upload {...uploadProps}>
              <Button icon={<UploadOutlined />}>Import from JSON</Button>
            </Upload>
            <Button
              onClick={() => {
                exportFromJSON({
                  data: stringMeta,
                  filename: "meta",
                  exportType: "json",
                });
              }}
              icon={<ExportOutlined />}
            >
              Export as JSON
            </Button>
          </Row>
          <Divider />
          <h2>Meta as JSON</h2>
          <Switch
            checkedChildren="hide"
            unCheckedChildren="show"
            onChange={onChangeSwitchViewJson}
          />
          <Divider />

          {viewJson ? (
            <div>
              {/* <Button onClick={showModal2}>Edit Meta</Button> */}
              {/* <Divider /> */}
              {!editJson ? (
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    maxWidth: "450px",
                  }}
                >
                  <h5>{JSON.stringify(stringMeta)}</h5>
                </div>
              ) : null}
            </div>
          ) : null}

          {/* <Modal
            title="Edit Meta"
            visible={isModal2Visible}
            onOk={handleOk2}
            onCancel={handleCancel2}
          >
            <div>
              <TextArea
                style={{ minHeight: "250px" }}
                defaultValue={JSON.stringify(stringMeta)}
                onChange={(value) => {
                  setStringMeta(JSON.parse(value));
                }}
              />
            </div>
          </Modal> */}
        </Col>
      </Row>
    </>
  );
};

export default DynamicForm;
