import React from "react";

import {
  Input,
  Button,
  Row,
  Select,
  InputNumber,
  DatePicker,
  AutoComplete,
  Divider,
  Checkbox,
} from "antd";

const RadioCheckboxes = ({ handlePreviewField }) => {
  const CheckboxGroup = Checkbox.Group;

  const plainOptions = ["Apple", "Pear", "Orange"];
  const defaultCheckedList = ["Apple", "Orange"];
  const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = React.useState(true);
  const [checkAll, setCheckAll] = React.useState(false);
  function onChange(e) {}
  const onChange2 = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };
  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };
  const addButton = (id) => {
    return (
      <Button
        onClick={() => {
          handlePreviewField("checkbox", id);
        }}
      >
        Configure
      </Button>
    );
  };
  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Checkbox onChange={onChange}>Checkbox</Checkbox>
      </div>
      <br />
      {addButton(0)}
      <Divider />
      <div>
        <Checkbox
          indeterminate={indeterminate}
          onChange={onCheckAllChange}
          checked={checkAll}
        >
          Multi-checkbox
        </Checkbox>
        <br />
        <br />
        <CheckboxGroup
          options={plainOptions}
          value={checkedList}
          onChange={onChange2}
        />
      </div>
      <br />
      {addButton(1)}
      <Divider />
    </div>
  );
};
export default RadioCheckboxes;
