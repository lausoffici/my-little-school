import React from "react";
import useFetch from "../hooks/useFetch";
import DataTable from "../components/DataTable";

const columns = [
  { field: "name", headerName: "Nombre", width: 150 },
  { field: "amount", headerName: "Precio", width: 150 },
];

const CoursesList = () => {
  const { data } = useFetch(`${process.env.REACT_APP_API_URL}/courses`);

  return <>{data && <DataTable columns={columns} rows={data} />}</>;
};

export default CoursesList;
