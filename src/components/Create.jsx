import React from "react";
import "../styles/Create.css";
import { Form, Input, InputNumber, Select, Button } from "antd";

const Create = () => {
  const [componentSize, setComponentSize] = React.useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <div className="planery-form" style={{ maxWidth: 600 }}>
      <Form
        className="plannery-form"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 18,
        }}
        layout="vertical"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="Grade">
          <InputNumber min={9} max={12} />
        </Form.Item>
        <Form.Item label="Concept">
          <Input />
        </Form.Item>
        <Form.Item label="Subject">
          <Select>
            <Select.Option value="30mts">tamil</Select.Option>
            <Select.Option value="45mts">English</Select.Option>
            <Select.Option value="1hr">Mathematics</Select.Option>
            <Select.Option value="45mts">Science</Select.Option>
            <Select.Option value="1hr">Social</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Duration">
          <Select>
            <Select.Option value="30mts">30 Minutes</Select.Option>
            <Select.Option value="45mts">45 Minutes</Select.Option>
            <Select.Option value="1hr">1 Hour</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="What to generate">
          <Select>
            <Select.Option value="Full lesson plan">
              Full lesson plan
            </Select.Option>
            <Select.Option value="Learning Objectives">
              Learning Objectives
            </Select.Option>
            <Select.Option value="Agenda">Agenda</Select.Option>
            <Select.Option value="Case study">Case study</Select.Option>
          </Select>
        </Form.Item>

        <div
          className="button-style"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Form.Item style={{ paddingRight: "250px" }}>
            <Button  className="save-btn"type="primary">Save</Button>
          </Form.Item>
          <Form.Item>
            <Button type="primary" className="formgenerate-btn">Generate</Button>
          </Form.Item>
        </div>
      </Form>
      <div className="content-gpt">
        <p>
         
        </p>
      </div>
    </div>
  );
};

export default Create;
