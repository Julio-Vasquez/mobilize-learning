import React, { Fragment } from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import "./SpecificTheme.scss";

export default function SpecificTheme(props) {
  //in props content background
  return (
    <div
      className="specific-theme"
      style={{
        backgroundImage: `url(${props.bg})`
      }}
    >
      <div className="specific-theme__dark" />
      <Row>
        <Col span={8} offset={3} className="specific-theme__poster">
          <div
            style={{
              backgroundImage: `url(${props.cover})`
            }}
          />
        </Col>
        <Col className="specific-theme__info" span={10}>
          <Fragment>
            <div className="specific-theme__info-header">
              <h1>{props.title}</h1>
            </div>

            <div className="specific-theme__info-content">
              <h3>Informacion General</h3>
              <p>{props.description}</p>
              <h3>Contenido</h3>
              <ul>
                {props.contenido.map((cont, key) => (
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
}
