import React from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  CardHeader,
} from "@material-ui/core";
import useFetch from "../hooks/useFetch";
import StudentForm from "../modules/Student/StudentForm";

const useStyles = makeStyles((theme) => ({
  field: {
    margin: theme.spacing(1),
  },
  root: {
    padding: theme.spacing(2),
  },
}));

const Student = () => {
  const classes = useStyles();
  let { id } = useParams();
  const { data: studentData, setData: setStudentData } = useFetch(
    `students/${id}`
  );

  const onChange = ({ target: { name, value } }) =>
    setStudentData((prevState) => ({ ...prevState, [name]: value }));

  return (
    <>
      {studentData && (
        <Card className={classes.root}>
          <CardHeader
            title={`${studentData.firstName} ${studentData.lastName}`}
          />
          <CardContent className={classes.content}>
            <StudentForm studentData={studentData} onChange={onChange} />
          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary">
              Guardar
            </Button>
          </CardActions>
        </Card>
      )}
    </>
  );
};

export default Student;
