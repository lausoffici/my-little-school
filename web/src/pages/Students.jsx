import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import StudentList from "../components/StudentList";
import AddStudentModal from "../modules/Student/AddStudentModal";
import { makeStyles } from "@material-ui/core/styles";
import SearchBar from "../components/SearchBar";
import useModal from "../hooks/useModal";
import { Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  title: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(1),
  },
  addStudent: {
    marginLeft: 10,
  },
}));

const StudentsList = () => {
  const classes = useStyles();
  const { isShowing, toggleModal } = useModal();
  const { data: students, setData: setStudents } = useFetch("students");
  const [nameLike, setNameLike] = useState("");

  const onConfirm = (student) => {
    setStudents([...students, student]);
    history.push(`/students/${student.id}`);
  };

  return (
    <>
      <div className={classes.title}>
        <SearchBar handleChange={(e) => setNameLike(e.target.value)} />
        <div className={classes.actions}>
          <Button
            color="primary"
            className={classes.addStudent}
            onClick={toggleModal}
            startIcon={<Add />}
            variant="contained"
            size="small"
          >
            Crear alumno
          </Button>
        </div>
      </div>

      <StudentList rows={students} nameLike={nameLike} />

      <AddStudentModal
        isShowing={isShowing}
        toggleModal={toggleModal}
        onConfirm={onConfirm}
      />
    </>
  );
};

export default StudentsList;
