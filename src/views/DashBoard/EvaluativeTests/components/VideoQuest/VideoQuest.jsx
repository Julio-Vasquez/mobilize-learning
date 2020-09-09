import React from "react";
import PropTypes from "prop-types";
import { Form, Radio } from 'antd';

export const VideoQuest = ({ options, question, video }) => {
  const { Item } = Form;
  return (
    <div className="video-Quest">
      <Item>
        <video width="400" height="260" controls>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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

VideoQuest.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  question: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired
};
