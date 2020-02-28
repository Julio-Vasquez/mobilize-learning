import React from "react";
import { Form, Slider, Radio, Select } from "antd";

const SliderQuestion = props => {
  return (
    <div className="question">
      <Form.Item label={props.title}>
        <Slider
          marks={{
            0: "0",
            20: "20",
            40: "40",
            60: "60",
            80: "80",
            100: "100"
          }}
        />
      </Form.Item>
    </div>
  );
};

const RadioQuestion = props => {
  return (
    <Form.Item label={props.title}>
      <Radio.Group>
        {props.content.map((item, key) => (
          <Radio value={item} key={key}>
            {item}
          </Radio>
        ))}
      </Radio.Group>
    </Form.Item>
  );
};

const CheckQuestion = props => {
  return (
    <Form.Item name="radio-button" label={props.title}>
      <Radio.Group>
        {props.content.map((item, key) => (
          <Radio.Button value={item} key={key}>
            {item}
          </Radio.Button>
        ))}
      </Radio.Group>
    </Form.Item>
  );
};

const MultipleQuestion = props => {
  const { Option } = Select;
  return (
    <Form.Item name="select-multiple" label={props.title}>
      <Select
        mode="multiple"
        placeholder={props.placeholder}
        style={{ width: "220px" }}
      >
        {props.content.map((item, key) => (
          <Option value={item} key={key}>
            {item}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export { SliderQuestion, RadioQuestion, CheckQuestion, MultipleQuestion };
