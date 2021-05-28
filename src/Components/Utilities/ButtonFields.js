import React from "react";

import {
  Input,
  Col,
  Row,
  Switch,
  Button,
  Divider,
  DatePicker,
  AutoComplete,
  Cascader,
} from "antd";

import { DownloadOutlined } from "@ant-design/icons";

const ButtonFields = ({ handlePreviewField }) => {
  const addButton = (id) => {
    return (
      <Button
        onClick={() => {
          handlePreviewField("button", id);
        }}
      >
        Configure
      </Button>
    );
  };
  return (
    <div>
      <>
        <Button>Default</Button>
        <Button disabled>Default (disabled)</Button>
        <br />
        <br />
        {addButton(0)}
        <Divider />
        <Button type="primary" loading>
          Loading
        </Button>
        <br />
        <br />
        {addButton(1)}
        <Divider />
        <Button type="primary" icon={<DownloadOutlined />}>
          Download
        </Button>
        <br />
        <br />
        {addButton(2)}

        <Divider />
        <Switch checkedChildren="disabled" unCheckedChildren="enabled" />
        <br />
        <br />
        {addButton(3)}
      </>
    </div>
  );
};
export default ButtonFields;
