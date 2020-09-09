import React from "react";
import PropTypes from "prop-types";
import { Form, Radio } from 'antd';

export const RadioQuest = ({ options, question }) => {
  const { Item } = Form;
  return (
    <div className="radio-quest">
      <Item>
        <div className="ant-col ant-form-item-label">
          <label title={question}>{question}</label>
        </div>
        <br />
        <Radio.Group>
          {options.map((item, key) => (
            <Radio value={item} key={key}>
              {item}
            </Radio>
          ))}
        </Radio.Group>
      </Item>
    </div>
  );
};

RadioQuest.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  question: PropTypes.string.isRequired
};

