import React from "react";

import {
  Input,
  Col,
  Row,
  Select,
  Rate,
  InputNumber,
  DatePicker,
  Button,
  Cascader,
  Divider,
} from "antd";

import { SettingOutlined } from "@ant-design/icons";

const SelectFields = ({ handlePreviewField }) => {
  const { Option } = Select;
  const addButton = (id) => {
    return (
      <Button
        onClick={() => {
          handlePreviewField("select", id);
        }}
      >
        Configure
      </Button>
    );
  };
  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Input.Group compact>
          <Select placeholder="Option1">
            <Option value="Option1">Option1</Option>
            <Option value="Option2">Option2</Option>
          </Select>
          <Input
            style={{ width: "79.5%" }}
            placeholder="Input field with pre-pended option"
          />
        </Input.Group>
      </div>
      <br />
      {addButton(0)}
      <Divider />
      <div style={{ marginBottom: 16 }}>
        <Input.Group compact>
          <Select placeholder="Option1-1">
            <Option value="Option1-1">Option1-1</Option>
            <Option value="Option1-2">Option1-2</Option>
          </Select>
          <Select placeholder="Option2-2">
            <Option value="Option2-1">Option2-1</Option>
            <Option value="Option2-2">Option2-2</Option>
          </Select>
        </Input.Group>
      </div>
      {addButton(1)}
      <Divider />
      <div style={{ marginBottom: 16 }}>
        <Input.Group compact>
          <Input style={{ width: "50%" }} placeholder="input content" />
          <DatePicker style={{ width: "50%" }} />
        </Input.Group>
        <br />
        {addButton(2)}
      </div>
      <Divider />
      <div style={{ marginBottom: 16 }}>
        <Input.Group compact>
          <Input style={{ width: "30%" }} placeholder="input content" />
          <DatePicker.RangePicker style={{ width: "70%" }} />
        </Input.Group>
        <br />
        {addButton(3)}
      </div>
      <Divider />
      <div style={{ marginBottom: 16 }}>
        <Rate />
        <br />
        <br />
        {addButton(4)}
      </div>
      <Divider />
    </div>
  );
};
export default SelectFields;
