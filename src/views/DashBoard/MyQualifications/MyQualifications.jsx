import React, { useState } from "react";
import { Table, Tag, Input, Button, Icon } from "antd";
import Highlighter from "react-highlight-words";

import { DataTable } from "./../../../common/Data";

import "./MyQualifications.scss";

export default function MyQualifications() {
  let searchInput;
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = clearFilters => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex, title) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            searchInput = node;
          }}
          placeholder={`Buscar por ${title}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button
          onClick={() => handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.select());
      }
    },
    render: text =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      )
  });

  const columns = [
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
      render: text => <p>{text}</p>,
      ...getColumnSearchProps("name", "Nombre")
    },
    {
      title: "Edad",
      dataIndex: "age",
      key: "age",
      ...getColumnSearchProps("age", "Edad")
    },
    {
      title: "Email",
      dataIndex: "address",
      key: "address",
      ...getColumnSearchProps("address", "Email")
    },
    {
      title: "Tema",
      dataIndex: "theme",
      key: "theme",
      ...getColumnSearchProps("theme", "Tema")
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      ...getColumnSearchProps("tags", "Tag"),
      render: tags => (
        <span>
          {tags.map(tag => {
            let color = tag.length >= 9 ? "geekblue" : "green";
            if (tag === "Reprobado") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      )
    },
    {
      title: "Calificacion",
      key: "cal",
      dataIndex: "cal",
      ...getColumnSearchProps("cal", "Calificacion")
    }
  ];

  return (
    <div className="qualification">
      <div className="qualification__title">
        <h2>Mis Calificaciones</h2>
      </div>
      <div className="qualification__body">
        <Table columns={columns} dataSource={DataTable} />
      </div>
    </div>
  );
}
