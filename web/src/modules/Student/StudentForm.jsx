import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StudentCourses from "./StudentCourses";
import Input from "../../components/Input";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  formSection: {
    margin: 10,
    flex: 1,
    minWidth: 300,
  },
  subtitle: {
    marginBottom: theme.spacing(1),
  },
}));

const StudentForm = ({ studentData, setStudentData }) => {
  const classes = useStyles();

  const onChange = ({ target: { name, value } }) =>
    setStudentData({ ...studentData, [name]: value });

  return (
    <div className={classes.form}>
      <div className={classes.formSection}>
        <Typography variant="h6" color="primary" className={classes.subtitle}>
          Datos personales
        </Typography>
        <Input name="firstName" label="Nombre" required onChange={onChange} />
        <Input name="lastName" label="Apellido" required onChange={onChange} />
        <Input name="dni" label="Dni" />
        <Input
          name="description"
          label="Observaciones"
          rows={5}
          onChange={onChange}
        />
      </div>
      <div className={classes.formSection}>
        <Typography variant="h6" color="primary" className={classes.subtitle}>
          Contacto
        </Typography>
        <Input name="address" label="Domicilio" onChange={onChange} />
        <Input name="city" label="Localidad" onChange={onChange} />
        <Input name="email" label="Correo electrónico" onChange={onChange} />
      </div>
      <div className={classes.formSection}>
        <Typography variant="h6" color="primary" className={classes.subtitle}>
          Cursos
        </Typography>
        <StudentCourses
          courses={studentData ? studentData.courses : []}
          setStudentData={setStudentData}
        />
      </div>
    </div>
  );
};

export default StudentForm;
