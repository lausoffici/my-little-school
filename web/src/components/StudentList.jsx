import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grid: {
    backgroundColor: "#fff",
    marginBottom: theme.spacing(2),
    height: "100%",
  },
}));

const DataTable = ({ rows, nameLike }) => {
  const classes = useStyles();
  const history = useHistory();

  const columns = [
    {
      field: "fullName",
      headerName: "Alumno",
      width: 200,
      valueGetter: (params) =>
        `${params.getValue("lastName") || ""}, ${
          params.getValue("firstName") || ""
        }`,
    },
    { field: "firstName", headerName: "Nombre", width: 150 },
    { field: "lastName", headerName: "Apellido", width: 150 },
  ];

  const filterModel = {
    items: [
      { columnField: "fullName", operatorValue: "contains", value: nameLike },
    ],
  };

  const sortModel = [
    {
      field: "fullName",
      sort: "asc",
    },
  ];

  const onRowClick = ({ row }) => {
    history.push(`/students/${row.id}`);
  };

  return (
    rows && (
      <DataGrid
        rows={rows}
        columns={columns}
        className={classes.grid}
        density="compact"
        filterModel={filterModel}
        sortModel={sortModel}
        disableColumnMenu={true}
        onRowClick={onRowClick}
        hideFooterPagination={false}
      />
    )
  );
};

export default DataTable;
