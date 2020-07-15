import React, { useState, useEffect } from "react";
import { Table, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from 'react-redux';
import Highlighter from "react-highlight-words";

import { Loading } from './../../../components/Loading';
import { score } from './../../../services/score/actions';
import Columns from './components';
import { FunctionToken } from './../../../common/token';

import "./MyQualifications.scss";

export default function MyQualifications() {
  let searchInput;
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");

  const { token } = useSelector(state => state.Auth);
  const { loading, scoreData } = useSelector(state => state.Score);

  const dispatch = useDispatch();

  useEffect(() => {
    const { result: { userName } } = FunctionToken.Decode(token);
    dispatch(score.getScore(userName));
  }, [dispatch, token]);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex, title) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input ref={(node) => searchInput = node}
          placeholder={`Buscar por ${title}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          <SearchOutlined />
          Buscar
        </Button>
        <Button
          onClick={() => handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Limpiar
        </Button>
      </div>
    ),
    filterIcon: (filtered) => (<SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />),
    onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) setTimeout(() => searchInput.select());
    },
    render: (text) => searchedColumn === dataIndex ?
      <Highlighter
        highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
        searchWords={[searchText]}
        autoEscape
        textToHighlight={text.toString()}
      />
      : (text)
  });

  return loading ? <Loading /> : (
    <div className="qualification">
      <div className="qualification__title">
        <h2>Mis Calificaciones</h2>
      </div>
      <div className="qualification__body">
        <Table columns={Columns(getColumnSearchProps)} dataSource={scoreData} />
      </div>
    </div>
  );
}
