import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  grid: {
    backgroundColor: "#fff",
    marginBottom: theme.spacing(2),
    height: "100%",
  },
}));

const DataTable = ({
  columns,
  rows,
  filterModel,
  sortModel,
  onRowClick,
  hideFooterPagination,
}) => {
  const classes = useStyles();

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      className={classes.grid}
      density="compact"
      filterModel={filterModel}
      sortModel={sortModel}
      disableColumnMenu={true}
      onRowClick={onRowClick}
      hideFooterPagination={hideFooterPagination}
    />
  );
};

export default DataTable;
