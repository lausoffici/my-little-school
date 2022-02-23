import React from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import StudentCourses from "../modules/Student/StudentCourses";
import useFetch from "../hooks/useFetch";
import useModal from "../hooks/useModal";
import AddStudentCourseModal from "../modules/Student/AddStudentCourseModal";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(2),
    flex: 1,
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  formSection: {},
  subtitle: {
    marginBottom: theme.spacing(1),
  },
}));

const Student = () => {
  const { isShowing, toggleModal } = useModal();
  const classes = useStyles();
  let { id } = useParams();
  const { data: studentData, setStudentData } = useFetch("students/" + id);

  return (
    <>
      {studentData && (
        <Card className={classes.card}>
          <CardHeader
            title={`${studentData.firstName} ${studentData.lastName}`}
          />
          <CardContent className={classes.cardContent}>
            <div className={classes.formSection}>
              <Typography
                variant="h6"
                color="primary"
                className={classes.subtitle}
              >
                Datos personales
              </Typography>
              <Typography>
                <b>Nombre:</b> {studentData.firstName}
              </Typography>
              <Typography>
                <b>Apellido:</b> {studentData.lastName}
              </Typography>
              <Typography>
                <b>Dni:</b> {studentData.dni}
              </Typography>
              <Typography>
                <b>Fecha de nacimiento:</b> {studentData.birthDate}
              </Typography>
            </div>
            <div className={classes.formSection}>
              <Typography
                variant="h6"
                color="primary"
                className={classes.subtitle}
              >
                Contacto
              </Typography>
              <Typography>
                <b>Domicilio:</b> {studentData.address}
              </Typography>
              <Typography>
                <b>Localidad:</b> {studentData.city}
              </Typography>
              <Typography>
                <b>Correo electrónico:</b> {studentData.email}
              </Typography>
            </div>
            <div className={classes.formSection}>
              <Typography
                variant="h6"
                color="primary"
                className={classes.subtitle}
              >
                Cursos
              </Typography>
              <StudentCourses
                courses={studentData.courses}
                setStudentData={setStudentData}
              />
            </div>
          </CardContent>
        </Card>
      )}
      <AddStudentCourseModal isShowing={isShowing} toggleModal={toggleModal} />
    </>
  );
};

export default Student;
