import React, { useState } from "react";
import MOCK_DATA from "./MOCK_DATA.json";

const Sorting = () => {
  const [tableData, setTableData] = useState(MOCK_DATA);
  const [order, setOrder] = useState("ASC");

  const handleSorting = (value) => {
    if (order === "ASC") {
      const sorted = [...tableData].sort((a, b) =>
        a[value].toLowerCase() > b[value].toLowerCase() ? 1 : -1
      );
      setTableData(sorted);
      setOrder("DSC");
    }

    if (order === "DSC") {
      const sorted = [...tableData].sort((a, b) =>
        a[value].toLowerCase() < b[value].toLowerCase() ? 1 : -1
      );
      setTableData(sorted);
      setOrder("ASC");
    }
  };

  const handleIdSort = () => {
    if (order === "ASC") {
      const sorted = [...tableData].sort((a, b) =>
      a.id < b.id ? 1 : -1
      );
      setOrder("DSC");
      setTableData(sorted);
    } else if (order === "DSC") {
        const sorted = [...tableData].sort((a, b) =>
        a.id > b.id ? 1 : -1
      );
      setOrder("ASC");
      setTableData(sorted);
    }
  };

  return (
    <div>
      <table border={1} cellPadding={20} cellSpacing={2}>
        <thead>
          <tr>
            <th onClick={handleIdSort}>ID</th>
            <th onClick={() => handleSorting("first_name")}>FIRST NAME</th>
            <th onClick={() => handleSorting("last_name")}>LAST NAME</th>
            <th onClick={() => handleSorting("email")}>EMAIL</th>
            <th onClick={() => handleSorting("gender")}>GENDER</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => {
            return (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.first_name}</td>
                <td>{data.last_name}</td>
                <td>{data.email}</td>
                <td>{data.gender}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Sorting;
