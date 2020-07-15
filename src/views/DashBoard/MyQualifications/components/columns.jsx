import React from 'react';
import { Tag } from 'antd';

const getColor = (tag) => {
  switch (tag) {
    case "APROBADO": return "green";
    case "REPROBADO": return "volcano";
    default: return "geekblue";
  }
}

const Columns = (search) => {
  return [
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Apellido",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Tema",
      dataIndex: "theme",
      key: "theme",
      ...search("theme", "Tema"),
    },
    {
      title: "Calificacion",
      key: "cal",
      dataIndex: "cal",
    },
    {
      title: "Resultado",
      key: "tag",
      dataIndex: "tag",
      ...search("tag", "Resultado"),
      render: (tag) => (
        <span>
          <Tag
            color={getColor(tag)}
            key={tag}
          >
            {tag}
          </Tag>
        </span>
      ),
    }
  ]
}

export default Columns;