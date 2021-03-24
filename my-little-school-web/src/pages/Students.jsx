import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import DataTable from "../components/DataTable";
import AddStudentDialog from "../modules/AddStudentDialog";
import { makeStyles } from "@material-ui/core/styles";
import SearchBar from "../components/SearchBar";

const useStyles = makeStyles((theme) => ({
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(1),
  },
  input: {},
}));

const StudentsList = () => {
  const classes = useStyles();
  const { data } = useFetch(`${process.env.REACT_APP_API_URL}/students`);
  const [nameLike, setNameLike] = useState("");

  const columns = [
    {
      field: "fullName",
      headerName: "Alumne",
      sortable: false,
      width: 200,
      valueGetter: (params) =>
        `${params.getValue("firstName") || ""} ${
          params.getValue("lastName") || ""
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

  return (
    <>
      <div className={classes.title}>
        <SearchBar handleChange={(e) => setNameLike(e.target.value)} />
        <AddStudentDialog />
      </div>

      {data && (
        <DataTable columns={columns} rows={data} filterModel={filterModel} />
      )}
    </>
  );
};

export default StudentsList;
