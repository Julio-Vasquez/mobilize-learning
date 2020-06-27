import React, { Fragment } from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./SpecificTheme.scss";

const SpecificTheme = ({ bg, cover, title, description, content }) => {
  return (
    <div
      className="specific-theme"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="specific-theme__dark" />
      <Row>
        <Col span={8} offset={3} className="specific-theme__poster">
          <div
            style={{
              backgroundImage: `url(${cover})`,
            }}
          />
        </Col>
        <Col className="specific-theme__info" span={10}>
          <Fragment>
            <div className="specific-theme__info-header">
              <h1>{title}</h1>
            </div>
            <div className="specific-theme__info-content">
              <h2>Informacion General</h2>
              <p>{description}</p>
              <h3>Contenido</h3>
              <ul>
                {content.map((cont, key) => (
                  <li key={key}>
                    <Link to={`${cont.link}`}>{cont.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </Fragment>
        </Col>
      </Row>
    </div>
  );
};

SpecificTheme.propTypes = {
  bg: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired,
};

export default SpecificTheme;
