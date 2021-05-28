import React from 'react';
import './InputStyle.css';
import Password from 'react-better-password';
import { CloseOutlined } from '@ant-design/icons';
import { Form, Input, Row, Col, Space, Button } from 'antd';

const PasswordInput = (props) => {
  const [fieldValue, setFieldValue] = React.useState('');
  const [isFocused, setFocused] = React.useState(false);
  const { type, value, onChange } = props;
  const handlePassword = (password) => {
    setFieldValue(password);
  };
  const handleTextInput = (event) => {
    setFieldValue(event.target.value);
  };

  return (
    <div className='form'>
      {type === 'password' ? (
        <Password
          className={isFocused ? 'custom-input-onfocus' : 'custom-input'}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          value={value.pass}
          // placeholder={placeholder}
          onChange={(v) => onChange({ pass: v })}
        />
      ) : (
        <Input
          value={fieldValue}
          // placeholder={placeholder}
          onChange={(v) => onChange({ pass: v })}
        />
      )}
    </div>
  );
};

export default PasswordInput;
