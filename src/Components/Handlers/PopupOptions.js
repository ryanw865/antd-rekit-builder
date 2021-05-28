import React from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  DownloadOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Button, Select, Switch, List } from "antd";

const PopupOptions = ({
  field_type,
  field_id,
  inputPostOptions,
  inputPreOptions,
  plainOptions,
  setPlainOptions,
  set_button_name,
  set_field_name,
  set_field_placeholder,
  set_field_placeholder_2,
  set_preview_size,
  set_field_icon,
  set_field_pre,
  set_field_post,
  onChangeZipCodeSwitch,
  onChangeFieldRequiredSwitch,
  onChangeCVVSwitch,
  setInputPreOptions,
  setInputPostOptions,
  temporaryField1,
  temporaryField2,
  setTemporaryField1,
  setTemporaryField2,
  onChangeSwitchButtonOption,
  selectInputOptions1,
  selectInputOptions2,
  selectInputOptions3,
  setSelectInputOptions1,
  setSelectInputOptions2,
  setSelectInputOptions3,
  onChangeButtonTypeOption,
  toggleOnPlaceholder,
  toggleOffPlaceholder,
  setToggleOnPlaceholder,
  setToggleOffPlaceholder,
}) => {
  const { Option } = Select;
  return (
    <div>
      <h2>Options</h2>
      {field_type === "button" && field_id !== 3 ? (
        <>
          <h3>Button Name</h3>
          <input
            onChange={(e) => {
              set_button_name(e.target.value);
            }}
          ></input>
          <br />
        </>
      ) : null}
      {field_type === "button" && field_id === 3 ? (
        <>
          <h3>Toggle On Placeholder</h3>
          <input
            onChange={(e) => {
              setToggleOnPlaceholder(e.target.value);
            }}
          ></input>
          <br />
        </>
      ) : null}
      {field_type === "button" && field_id === 3 ? (
        <>
          <h3>Toggle Off Placeholder</h3>
          <input
            onChange={(e) => {
              setToggleOffPlaceholder(e.target.value);
            }}
          ></input>
          <br />
        </>
      ) : null}
      {field_type !== "button" || field_id === 3 ? (
        <>
          <h3>Field Name</h3>
          <input
            onChange={(e) => {
              set_field_name(e.target.value);
            }}
          ></input>
          <br />
          <br />
        </>
      ) : null}

      {field_type !== "button" &&
      field_type !== "predefined" &&
      field_type !== "input:multi" ? (
        <>
          <h3>Placeholder</h3>
          <input
            onChange={(e) => {
              set_field_placeholder(e.target.value);
            }}
          ></input>
          <br />
        </>
      ) : null}
      {field_type.substring(0, 5) === "input" &&
      field_id > 3 &&
      field_id < 7 ? (
        <>
          <h3>Placeholder 2</h3>
          <input
            onChange={(e) => {
              set_field_placeholder_2(e.target.value);
            }}
          ></input>
          <br />
        </>
      ) : null}
      {field_type !== "button" || field_id === 3 ? (
        <>
          <h3>Field Required</h3>
          <Switch
            checkedChildren="hide"
            unCheckedChildren="show"
            onChange={onChangeFieldRequiredSwitch}
          />
          <br />
          <br />
        </>
      ) : null}

      {field_type.substring(0, 5) === "input" || field_type === "select" ? (
        <>
          <h3>Size</h3>
          <Select
            placeholder="small"
            onChange={(e) => {
              set_preview_size(e);
            }}
          >
            <Option value="small">Small</Option>
            <Option value="default size">Medium</Option>
            <Option value="large">Large</Option>
          </Select>
          <br />
        </>
      ) : null}
      <br />
      {field_type.substring(0, 5) === "input" && field_id === 1 ? (
        <>
          <h3>Field Icon</h3>
          <Select
            style={{ width: "30%" }}
            placeholder="Select Icon"
            onChange={(e) => {
              set_field_icon(e);
            }}
          >
            <Option value={0}>
              <SettingOutlined /> Gear
            </Option>
            <Option value={1}>
              <AppstoreOutlined /> Blocks
            </Option>
            <Option value={2}>
              <MailOutlined /> Mail
            </Option>
            <Option value={3}>
              <DownloadOutlined /> Download
            </Option>
          </Select>
        </>
      ) : null}
      {field_type.substring(0, 5) === "input" && field_id === 2 ? (
        <>
          <h3>Field Pre</h3>
          <input
            onChange={(e) => {
              set_field_pre(e.target.value);
            }}
          />
          <br />
        </>
      ) : null}
      {field_type.substring(0, 5) === "input" && field_id === 2 ? (
        <>
          <h3>Field Post</h3>
          <input
            onChange={(e) => {
              set_field_post(e.target.value);
            }}
          />
          <br />
        </>
      ) : null}

      {field_type === "predefined" && field_id === 0 ? (
        <>
          <h3>Zip Code Field</h3>
          <Switch
            checkedChildren="hide"
            unCheckedChildren="show"
            onChange={onChangeZipCodeSwitch}
          />
          <br />
        </>
      ) : null}

      {field_type === "predefined" && field_id === 0 ? (
        <>
          <h3>CVV Field</h3>
          <Switch
            checkedChildren="hide"
            unCheckedChildren="show"
            onChange={onChangeCVVSwitch}
          />
          <br />
        </>
      ) : null}

      {field_type.substring(0, 5) === "input" && field_id === 3 ? (
        <>
          <h3>Field Pre</h3>
          <List
            itemLayout="horizontal"
            dataSource={inputPreOptions}
            renderItem={(option, index) => (
              <List.Item>
                <List.Item.Meta
                  title={
                    <>
                      <p>
                        <DeleteOutlined
                          onClick={() => {
                            setInputPreOptions(
                              inputPreOptions.filter((value, indexof) => {
                                return index !== indexof;
                              })
                            );
                          }}
                          style={{
                            paddingRight: "15px",
                            color: "red",
                            cursor: "pointer",
                          }}
                        />
                        {option}
                      </p>
                    </>
                  }
                />
              </List.Item>
            )}
          />
          <input
            onChange={(e) => {
              setTemporaryField1(e.target.value);
            }}
          ></input>
          <Button
            onClick={(e) => {
              setInputPreOptions([...inputPreOptions, temporaryField1]);
              setTemporaryField1("");
            }}
          >
            Add
          </Button>
          <br />
          <br />
        </>
      ) : null}
      {field_type.substring(0, 5) === "input" && field_id === 3 ? (
        <>
          <h3>Field Post</h3>
          <List
            itemLayout="horizontal"
            dataSource={inputPostOptions}
            renderItem={(option, index) => (
              <List.Item>
                <List.Item.Meta
                  title={
                    <>
                      <p>
                        <DeleteOutlined
                          onClick={() => {
                            setInputPostOptions(
                              inputPostOptions.filter((value, indexof) => {
                                return index !== indexof;
                              })
                            );
                          }}
                          style={{
                            paddingRight: "15px",
                            color: "red",
                            cursor: "pointer",
                          }}
                        />
                        {option}
                      </p>
                    </>
                  }
                />
              </List.Item>
            )}
          />
          <input
            onChange={(e) => {
              setTemporaryField2(e.target.value);
            }}
          ></input>
          <Button
            onClick={(e) => {
              setInputPostOptions([...inputPostOptions, temporaryField2]);
              setTemporaryField2("");
            }}
          >
            Add
          </Button>
          <br />
        </>
      ) : null}

      {field_type === "button" && field_id === 0 ? (
        <>
          <h3>Button Status</h3>
          <Switch
            checkedChildren="enabled"
            unCheckedChildren="disabled"
            onChange={onChangeSwitchButtonOption}
          />
          <br />
        </>
      ) : null}
      {field_type === "checkbox" && field_id === 1 ? (
        <>
          <h3>Checkbox Options</h3>
          <List
            itemLayout="horizontal"
            dataSource={plainOptions}
            renderItem={(option, index) => (
              <List.Item>
                <List.Item.Meta
                  title={
                    <>
                      <p>
                        <DeleteOutlined
                          onClick={() => {
                            setPlainOptions(
                              plainOptions.filter((value, indexof) => {
                                return index !== indexof;
                              })
                            );
                          }}
                          style={{
                            paddingRight: "15px",
                            color: "red",
                            cursor: "pointer",
                          }}
                        />
                        {option}
                      </p>
                    </>
                  }
                />
              </List.Item>
            )}
          />
          <input
            onChange={(e) => {
              setTemporaryField1(e.target.value);
            }}
          ></input>
          <Button
            onClick={(e) => {
              setPlainOptions([...plainOptions, temporaryField1]);
              setTemporaryField1("");
            }}
          >
            Add
          </Button>
          <br />
        </>
      ) : null}

      {field_type === "select" && field_id === 0 ? (
        <>
          <h3>Select Options</h3>
          <List
            itemLayout="horizontal"
            dataSource={selectInputOptions1}
            renderItem={(option, index) => (
              <List.Item>
                <List.Item.Meta
                  title={
                    <>
                      <p>
                        <DeleteOutlined
                          onClick={() => {
                            setSelectInputOptions1(
                              selectInputOptions1.filter((value, indexof) => {
                                return index !== indexof;
                              })
                            );
                          }}
                          style={{
                            paddingRight: "15px",
                            color: "red",
                            cursor: "pointer",
                          }}
                        />
                        {option}
                      </p>
                    </>
                  }
                />
              </List.Item>
            )}
          />
          <input
            onChange={(e) => {
              setTemporaryField1(e.target.value);
            }}
          ></input>
          <Button
            onClick={(e) => {
              setSelectInputOptions1([...selectInputOptions1, temporaryField1]);
              setTemporaryField1("");
            }}
          >
            Add
          </Button>
          <br />
        </>
      ) : null}

      {field_type === "select" && field_id === 1 ? (
        <>
          <h3>Select Options 1</h3>
          <List
            itemLayout="horizontal"
            dataSource={selectInputOptions2}
            renderItem={(option, index) => (
              <List.Item>
                <List.Item.Meta
                  title={
                    <>
                      <p>
                        <DeleteOutlined
                          onClick={() => {
                            setSelectInputOptions2(
                              selectInputOptions2.filter((value, indexof) => {
                                return index !== indexof;
                              })
                            );
                          }}
                          style={{
                            paddingRight: "15px",
                            color: "red",
                            cursor: "pointer",
                          }}
                        />
                        {option}
                      </p>
                    </>
                  }
                />
              </List.Item>
            )}
          />
          <input
            onChange={(e) => {
              setTemporaryField1(e.target.value);
            }}
          ></input>
          <Button
            onClick={(e) => {
              setSelectInputOptions2([...selectInputOptions2, temporaryField1]);
            }}
          >
            Add
          </Button>
          <br />
          <br />
          <br />

          <h3>Select Options 2</h3>
          <List
            itemLayout="horizontal"
            dataSource={selectInputOptions3}
            renderItem={(option, index) => (
              <List.Item>
                <List.Item.Meta
                  title={
                    <>
                      <p>
                        <DeleteOutlined
                          onClick={() => {
                            setSelectInputOptions3(
                              selectInputOptions3.filter((value, indexof) => {
                                return index !== indexof;
                              })
                            );
                          }}
                          style={{
                            paddingRight: "15px",
                            color: "red",
                            cursor: "pointer",
                          }}
                        />
                        {option}
                      </p>
                    </>
                  }
                />
              </List.Item>
            )}
          />
          <input
            onChange={(e) => {
              setTemporaryField2(e.target.value);
            }}
          ></input>
          <Button
            onClick={(e) => {
              setSelectInputOptions3([...selectInputOptions3, temporaryField2]);
            }}
          >
            Add
          </Button>
          <br />
        </>
      ) : null}

      {field_type === "button" && field_id === 0 ? (
        <>
          <h3>Button Type</h3>
          <Select
            defaultValue="primary"
            style={{ width: 120 }}
            onChange={onChangeButtonTypeOption}
          >
            <Option value="primary">Primary</Option>
            <Option value="secondary">Secondary</Option>
            <Option value="danger">Danger</Option>
            <Option value="dashed">Dashed</Option>
            <Option value="text">Text</Option>
            <Option value="link">Link</Option>
          </Select>
          <br />
        </>
      ) : null}
    </div>
  );
};

export default PopupOptions;
