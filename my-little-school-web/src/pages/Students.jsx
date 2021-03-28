import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import DataTable from "../components/DataTable";
import AddStudentDialog from "../modules/Student/AddStudentDialog";
import { makeStyles } from "@material-ui/core/styles";
import SearchBar from "../components/SearchBar";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(1),
  },
  actions: {
    display: "flex",
  },
}));

const StudentsList = () => {
  const classes = useStyles();
  const { data, setData } = useFetch("students");
  const [nameLike, setNameLike] = useState("");
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

  const onConfirm = (student) => {
    setData((prevState) => [...prevState, student]);
  };

  const onRowClick = ({ row }) => {
    history.push(`/students/${row.id}`);
  };

  return (
    <>
      <div className={classes.title}>
        <SearchBar handleChange={(e) => setNameLike(e.target.value)} />
        <div className={classes.actions}>
          <AddStudentDialog
            className={classes.actionItem}
            onConfirm={onConfirm}
          />
        </div>
      </div>

      {data && (
        <DataTable
          columns={columns}
          rows={data}
          filterModel={filterModel}
          sortModel={sortModel}
          onRowClick={onRowClick}
        />
      )}
    </>
  );
};

export default StudentsList;
