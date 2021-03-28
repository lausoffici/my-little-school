import React from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardActions,
  TextField,
  Button,
  CardHeader,
  Typography,
} from "@material-ui/core";
import useFetch from "../hooks/useFetch";

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
            <Typography variant="h6" color="primary">
              Datos personales
            </Typography>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="Nombre"
              onChange={(e) => onChange(e)}
              value={studentData.firstName}
              className={classes.field}
              variant="outlined"
            />
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Apellido"
              onChange={(e) => onChange(e)}
              value={studentData.lastName}
              className={classes.field}
              variant="outlined"
            />
            <TextField
              id="dni"
              name="dni"
              label="Dni"
              onChange={(e) => onChange(e)}
              value={studentData.dni}
              className={classes.field}
              variant="outlined"
            />
            <TextField
              multiline
              rows={3}
              id="description"
              name="description"
              label="Observaciones"
              onChange={(e) => onChange(e)}
              value={studentData.description}
              className={classes.field}
              variant="outlined"
              fullWidth
            />
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
