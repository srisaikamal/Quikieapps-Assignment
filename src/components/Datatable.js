import React from "react";
import MaterialTable from "material-table";

const Datatable = ({ columnData, tableData }) => {
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
