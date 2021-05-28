import React, { useCallback } from "react";
import { Form, Button, Input, Select, InputNumber, Row, Col } from "antd";
import FormBuilder, { useForceUpdate } from "antd-form-builder";

const PaymentForm = () => {
  const { Option } = Select;
  const [status, setStatus] = React.useState(true);
  const [cardNum, setCardNum] = React.useState("");
  const [cvvCode, setCvvCode] = React.useState("");
  const [zipCode, setZipCode] = React.useState("");
  const [expiryMm, setExpiryMm] = React.useState("");
  const [expiryYy, setExpiryYy] = React.useState("");
  const [form] = Form.useForm();
  const handleFinish = useCallback((values) => {});
  const handleChange = (fieldName, value) => {
    switch (fieldName) {
      case "card": {
        if (value.length < 17) {
          setCardNum(value);
        }
        break;
      }
      case "cvv": {
        setCvvCode(value);
        break;
      }
      case "zip": {
        setZipCode(value);
        break;
      }
      case "expiryMM": {
        setExpiryMm(value);
        break;
      }
      case "expiryYY": {
        setExpiryYy(value);
        break;
      }
      default: {
        break;
      }
    }

    switch (fieldName) {
      case "card": {
        if (
          value !== "" &&
          cvvCode !== "" &&
          zipCode !== "" &&
          expiryYy !== "" &&
          expiryMm !== ""
        ) {
          setStatus(false);
        } else setStatus(true);
        break;
      }
      case "cvv": {
        if (
          value !== "" &&
          cardNum !== "" &&
          zipCode !== "" &&
          expiryYy !== "" &&
          expiryMm !== ""
        ) {
          setStatus(false);
        } else setStatus(true);
        break;
      }
      case "zip": {
        if (
          value !== "" &&
          cvvCode !== "" &&
          cardNum !== "" &&
          expiryYy !== "" &&
          expiryMm !== ""
        ) {
          setStatus(false);
        } else setStatus(true);
        break;
      }
      case "expiryMM": {
        if (
          value !== "" &&
          expiryYy !== "" &&
          cvvCode !== "" &&
          zipCode !== "" &&
          cardNum !== ""
        ) {
          setStatus(false);
        } else setStatus(true);
        break;
      }
      case "expiryYY": {
        if (
          value !== "" &&
          expiryMm !== "" &&
          cvvCode !== "" &&
          zipCode !== "" &&
          cardNum !== ""
        ) {
          setStatus(false);
        } else setStatus(true);
        break;
      }
      default:
        break;
    }
  };

  const expiryInput = ({ handleChange1, handleChange2, value1, value2 }) => (
    <Row span={16}>
      <Col span={8}>
        <p>Expiry:</p>
      </Col>
      <Col span={4}>
        <Select
          onChange={(e) => handleChange1(e)}
          placeholder={"MM"}
          value={value1}
        >
          <Option value="01">01</Option>
          <Option value="02">02</Option>
          <Option value="03">03</Option>
          <Option value="04">04</Option>
          <Option value="05">05</Option>
          <Option value="06">06</Option>
          <Option value="07">07</Option>
          <Option value="08">08</Option>
          <Option value="09">09</Option>
          <Option value="10">10</Option>
          <Option value="11">11</Option>
          <Option value="12">12</Option>
        </Select>
      </Col>
      <Col span={1}>
        <h2 style={{ paddingLeft: "4px" }}>/</h2>
      </Col>
      <Col span={4}>
        <Select
          onChange={(e) => handleChange2(e)}
          placeholder={"YY"}
          value={value2}
        >
          <Option value="2021">2021</Option>
          <Option value="2022">2022</Option>
          <Option value="2023">2023</Option>
          <Option value="2024">2024</Option>
          <Option value="2025">2025</Option>
          <Option value="2026">2026</Option>
        </Select>
      </Col>
    </Row>
  );

  const meta1 = {
    columns: 4,
    formItemLayout: null, // Must set this for inline layout
    colon: true,
    fields: [
      {
        key: "card.number",
        label: "Card Number",
        colSpan: 4,
        widget: "input",
        widgetProps: { value: cardNum, maxLength: 16 },
        validateTrigger: "onBlur",
        rules: [
          {
            validator: (rule, value, callback) => {
              return new Promise((resolve, reject) => {
                if (value !== undefined)
                  if (value.length !== 16) {
                    reject(new Error("Card Number must be 16 digits long"));
                    setStatus(true);
                  } else {
                    if (
                      cvvCode !== "" &&
                      zipCode !== "" &&
                      expiryYy !== "" &&
                      expiryMm !== ""
                    ) {
                      setStatus(false);
                    }
                    resolve();
                  }
              });
            },
          },
        ],
        onChange: (e) => {
          handleChange("card", e.target.value);
        },
      },
      {
        key: "cvv",
        label: "CVV Code",
        colSpan: 4,
        required: true,
        widget: "input",
        widgetProps: { value: cardNum, maxLength: 3 },
        onChange: (e) => {
          handleChange("cvv", e.target.value);
        },
        validateTrigger: "onBlur",
        rules: [
          {
            validator: (rule, value, callback) => {
              return new Promise((resolve, reject) => {
                if (value !== undefined)
                  if (value.length < 3) {
                    reject(new Error("CVV must be 3 digits long"));
                    setStatus(true);
                  } else {
                    if (
                      cardNum !== "" &&
                      zipCode !== "" &&
                      expiryYy !== "" &&
                      expiryMm !== ""
                    ) {
                      setStatus(false);
                    }
                    resolve();
                  }
              });
            },
          },
        ],
      },
      {
        key: "zip",
        label: "ZIP Code",
        required: true,
        colSpan: 4,
        widget: "input",
        validateTrigger: "onBlur",
        widgetProps: { value: cardNum, maxLength: 5 },
        onChange: (e) => {
          handleChange("zip", e.target.value);
        },
        rules: [
          {
            validator: (rule, value, callback) => {
              return new Promise((resolve, reject) => {
                if (value !== undefined)
                  if (value.length < 5) {
                    reject(new Error("Zip code must be 5 digits long"));
                    setStatus(true);
                  } else {
                    if (
                      cvvCode !== "" &&
                      cardNum !== "" &&
                      expiryYy !== "" &&
                      expiryMm !== ""
                    ) {
                      setStatus(false);
                    }
                    resolve();
                  }
              });
            },
          },
        ],
      },
      // {
      //   key: "label1",
      //   colSpan: 4,
      //   render() {
      //     return (
      //       <fieldset>
      //         <legend>Expiry</legend>
      //       </fieldset>
      //     );
      //   },
      // },
      // {
      //   key: "expmm",
      //   label: "expmm",

      //   options: [
      //     "01",
      //     "02",
      //     "03",
      //     "04",
      //     "05",
      //     "06",
      //     "07",
      //     "08",
      //     "09",
      //     "10",
      //     "11",
      //     "12",
      //   ],
      //   widget: "select",
      //   onChange: (e) => {
      //     handleChange("expiryMM", e);
      //   },
      //   widgetProps: {
      //     value: expiryMm,
      //     maxLength: 2,
      //     max: 31,
      //     style: { width: 90 },
      //   },
      // },
      // {
      //   key: "expyy",
      //   label: "expyy",

      //   options: ["2021", "2022", "2023", "2024", "2025", "2026"],
      //   widget: "select",
      //   onChange: (e) => {
      //     handleChange("expiryYY", e);
      //   },
      //   widgetProps: {
      //     value: expiryMm,
      //     maxLength: 2,
      //     max: 31,
      //     style: { width: 90 },
      //   },
      // },
      {
        key: "exp",
        colSpan: 4,
        widget: expiryInput,

        widgetProps: {
          value1: expiryMm,
          value2: expiryYy,
          maxLength: 2,
          max: 31,
          handleChange1: (e) => handleChange("expiryMM", e),
          handleChange2: (e) => handleChange("expiryYY", e),
        },
      },
    ],
  };

  return (
    <Form
      layout="horizontal"
      form={form}
      onFinish={handleFinish}
      style={{ width: "500px" }}
    >
      <fieldset>
        <legend>Payment Form</legend>
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

export default PaymentForm;
