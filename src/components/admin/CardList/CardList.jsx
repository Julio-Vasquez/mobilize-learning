import React from "react";
import { List, Card } from "antd";
import { Link } from "react-router-dom";

import "./CardList.scss";

export default function CardList(props) {
  return (
    <List
      grid={{
        gutter: 12,
        xs: 1,
        sm: 2,
        md: 2,
        lg: 2,
        xl: 3,
        xxl: 4,
      }}
      dataSource={props.data}
      renderItem={(item) => (
        <List.Item className="car-cont">
          <Link to={`/admin/${props.module}/curse=${item.url}`}>
            <Card
              hoverable
              cover={<img alt={`${item.alt}`} src={`${item.urlImg}`} />}
            >
              <Card.Meta
                style={{ textAlign: "justify" }}
                title={`${item.title}`}
                description={`${item.description}`}
              />
            </Card>
          </Link>
        </List.Item>
      )}
    />
  );
}
