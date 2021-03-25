import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  grid: {
    backgroundColor: "#fff",
  },
}));

const DataTable = ({ columns, rows, filterModel, sortModel }) => {
  const classes = useStyles();
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      checkboxSelection
      className={classes.grid}
      density="compact"
      filterModel={filterModel}
      sortModel={sortModel}
      disableColumnMenu={true}
    />
  );
};

export default DataTable;
