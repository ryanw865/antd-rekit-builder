import React from "react";
import styled from "styled-components";
import {
  Input,
  Col,
  Button,
  Select,
  InputNumber,
  Form,
  DatePicker,
  AutoComplete,
  Cascader,
  Divider,
} from "antd";
import PasswordInput from "../CustomInput/CustomPasswordInput";
import { SettingOutlined } from "@ant-design/icons";
const Wrapper = styled.div`
  &:hover {
  }
`;

const InputFields = ({ handlePreviewField, currentSelectedType }) => {
  const { Option } = Select;
  const [passField, setPassField] = React.useState({ pass: "" });
  const onChangePassword = (value) => {
    setPassField(value);
  };
  const { TextArea } = Input;
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
  const addButton = (id, type) => {
    return (
      <Button
        onClick={() => {
          handlePreviewField(`input:${type}`, id);
        }}
      >
        Configure
      </Button>
    );
  };
  return (
    <>
      {currentSelectedType === "input:basic" ? (
        <>
          <Input.Group compact>
            <Input placeholder="Basic Input Field" />
          </Input.Group>
          <br />
          {addButton(0, "basic")}
          <Divider />
          <Input.Group compact>
            <Input
              addonAfter={<SettingOutlined />}
              placeholder="Input With Post-Pended Icon"
            />
          </Input.Group>
          <br />
          {addButton(1, "basic")}
          <Divider />
          <Input.Group compact>
            <Input
              addonBefore="pre"
              addonAfter="post"
              placeholder="Fixed Pre/Post-Pended Value"
            />
          </Input.Group>
          <br />
          {addButton(2, "basic")}
          <Divider />
          <Input.Group compact>
            <Input
              addonBefore={selectBefore}
              addonAfter={selectAfter}
              placeholder="Variable Pre/Post-Pended Value"
            />
          </Input.Group>
          <br />
          {addButton(3, "basic")}
        </>
      ) : null}
      {currentSelectedType === "input:numeric" ? (
        <>
          <Input.Group compact>
            <Input style={{ width: "20%" }} placeholder="0571" />
            <Input style={{ width: "30%" }} placeholder="26888888" />
          </Input.Group>
          <br />
          {addButton(4, "numeric")}

          <Divider />

          <Input.Group compact>
            <Input.Search style={{ width: "40%" }} placeholder="0571" />
            <Input.Search
              allowClear
              style={{ width: "40%" }}
              placeholder="26888888"
            />
          </Input.Group>
          <br />
          {addButton(5, "numeric")}

          <Divider />

          <Input.Group compact>
            <Input.Search
              allowClear
              style={{ width: "40%" }}
              placeholder="0571"
            />
            <Input.Search
              allowClear
              style={{ width: "40%" }}
              placeholder="26888888"
            />
          </Input.Group>
          <br />
          {addButton(6, "numeric")}

          <Divider />

          <Input.Group compact>
            <Select defaultValue="1">
              <Option value="1">Between</Option>
              <Option value="2">Except</Option>
            </Select>
            <Input
              style={{ width: 100, textAlign: "center" }}
              placeholder="Minimum"
            />
            <Input
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
              style={{
                width: 100,
                textAlign: "center",
              }}
              placeholder="Maximum"
            />
          </Input.Group>
          <br />
          {addButton(7, "numeric")}

          <br />
        </>
      ) : null}

      {currentSelectedType === "input:multi" ? (
        <>
          <TextArea rows={4} />
          <br />
          {addButton(8, "multi")}
        </>
      ) : null}
      {currentSelectedType === "input:password" ? (
        <>
          <PasswordInput
            type="password"
            value={passField.pass}
            onChange={(v) => onChangePassword({ pass: v })}
          />
          <br />
          {addButton(9, "password")}
          <Divider />
        </>
      ) : null}
      {currentSelectedType === "input:email" ? (
        <>
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
                style={{
                  width: "30vw",
                }}
                placeholder={"Email Input Field"}
              />
            </Form.Item>
          </Form>
          <br />
          {addButton(10, "email")}
          <Divider />
        </>
      ) : null}
    </>
  );
};
export default InputFields;

/*
<Button
              onClick={() => {
                if (
                  currentFieldName !== "" &&
                  currentFieldName !== null &&
                  currentFieldName !== undefined &&
                  metaFields.filter((value) => value.key === currentFieldName)
                    .length === 0
                ) {
                  setFieldsCount(fieldsCount + 1);
                  if (fieldType.key === "input") {
                    setMetaFields([
                      ...metaFields,
                      simpleInput(
                        currentFieldName,
                        currentFieldName,
                        fieldsCount
                      ),
                    ]);
                    setCurrentFieldName("");
                  } else if (fieldType.key === "password") {
                    setMetaFields([
                      ...metaFields,
                      passwordInput(
                        currentFieldName,
                        currentFieldName,
                        fieldsCount
                      ),
                    ]);
                    setCurrentFieldName("");
                  } else if (fieldType.key === "email") {
                    setMetaFields([
                      ...metaFields,
                      emailInput(
                        currentFieldName,
                        currentFieldName,
                        fieldsCount
                      ),
                    ]);
                    setCurrentFieldName("");
                  } else if (fieldType.key === "date") {
                    setMetaFields([
                      ...metaFields,
                      dateInput(
                        currentFieldName,
                        currentFieldName,
                        fieldsCount
                      ),
                    ]);
                    setCurrentFieldName("");
                  } else if (fieldType.key === "number") {
                    setMetaFields([
                      ...metaFields,
                      numberInput(
                        currentFieldName,
                        currentFieldName,
                        fieldsCount
                      ),
                    ]);
                    setCurrentFieldName("");
                  }
                  // else if (fieldType.key === "dropdown") {
                  //   setMetaFields([...metaFields,dropdownInput(currentFieldName,currentFieldName)])
                  // }
                  //setMetaFields([...metaFields,])
                  setCurrentFieldName("");
                }
              }}
            >
              Add Field
            </Button>


*/
