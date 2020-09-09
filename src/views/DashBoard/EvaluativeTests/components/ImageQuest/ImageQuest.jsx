import React from "react";
import PropTypes from "prop-types";
import { Form, Radio } from 'antd';

export const ImageQuest = ({ options, question, image, descriptionImg }) => {
  const { Item } = Form;
  return (
    <div className="image-Quest">
      <Item>
        <img
          src={image}
          alt={descriptionImg}
          style={{ width: "300px", height: "150px" }}
        />
        <br />
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

ImageQuest.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  question: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  descriptionImg: PropTypes.string.isRequired
};
