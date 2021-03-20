import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import axios from "axios";
import { Chip } from "@material-ui/core";
const Datatable = () => {
  const [apidata, setApidata] = useState();

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await axios.get(
      "https://finnhub.io/api/v1/stock/symbol?exchange=US&token=c1atgkn48v6rcdq9scsg"
    );
    setApidata(data);
    console.log(data);
  };

  const tableData = [];

  apidata &&
    apidata.data.map((data) => {
      let formData = {};
      formData = {
        currency: data.currency,
        description: data.description,
        displaySymbol: data.displaySymbol,
        type: data.type,
      };

      tableData.push(formData);
    });

  const columnData = [
    {
      title: "Company Name",
      field: "description",
    },

    {
      title: "Symbol",
      field: "displaySymbol",

      render: ({ displaySymbol }) => {
        return (
          <Chip
            style={{
              color: "#4A4AFF",
              backgroundColor: "#E6E6F2",
              fontWeight: "bold",
            }}
            label={displaySymbol}
            size="small"
          />
        );
      },
    },
    {
      title: "Currency",
      field: "currency",
    },

    {
      title: "Type",
      field: "type",
    },
  ];
  return (
    <div>
      <MaterialTable
        title="Stock Details Table"
        columns={columnData}
        data={tableData}
        options={{
          search: true,
          pageSizeOptions: [5, 20, 30, 40, 50, tableData.length],
        }}
      />
    </div>
  );
};

export default Datatable;
