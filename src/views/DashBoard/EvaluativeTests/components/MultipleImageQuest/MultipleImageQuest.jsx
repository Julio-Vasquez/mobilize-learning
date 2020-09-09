import React from "react";
import PropTypes from "prop-types";
import { Form, Radio } from 'antd';

export const MultipleImageQuest = ({ options, question }) => {
  const { Item } = Form;
  return (
    <div className="image-Quest">
      <Item>

        <div className="ant-col ant-form-item-label">
          <label title={question}>{question}</label>
        </div>
        <br />
        <Radio.Group>
          {options.map((item, key) => (
            <Radio value={item.value} key={key}>
              <img
                key={key}
                src={item.image}
                alt={item.descriptionImg}
                style={{ height: "150px" }}
              />
            </Radio>
          ))}
        </Radio.Group>
      </Item>
    </div>
  );
};

MultipleImageQuest.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      descriptionImg: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired,
  question: PropTypes.string.isRequired,
};
