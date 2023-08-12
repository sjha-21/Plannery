import React, { useState } from "react";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from "antd";
import Column from "antd/es/table/Column";
const Generate = () => {
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <Form
      className="plannery-form"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="vertical"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item label="Concept">
        <Input />
      </Form.Item>
      <Form.Item label="Subject">
        <Input />
      </Form.Item>
      <Form.Item label="Duration">
        <Select>
          <Select.Option value="30mts"></Select.Option>
          <Select.Option value="45mts"></Select.Option>
          <Select.Option value="1hr"></Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="Grade">
        <InputNumber min={1} max={12} />
      </Form.Item>

      <div
        className="button-style"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Form.Item style={{ paddingRight: "101px" }}>
          <Button>Save</Button>
        </Form.Item>
        <Form.Item>
          <Button>generate</Button>
        </Form.Item>
      </div>
    </Form>
  );
};
export default Generate;
