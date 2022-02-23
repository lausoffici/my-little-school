import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import StudentForm from "./StudentForm";

export default function AddStudentModal({ isShowing, toggleModal, onConfirm }) {
  const [studentData, setStudentData] = useState({});

  const handleConfirm = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/students`,
        {
          method: "POST",
          body: JSON.stringify(studentData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const responseData = await response.json();

      onConfirm(responseData);
      toggleModal();
    } catch (err) {
      // prints error
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };

  return (
    <Dialog open={isShowing} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Nuevo Alumno</DialogTitle>
      <DialogContent>
        <StudentForm
          studentData={studentData}
          setStudentData={setStudentData}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={toggleModal} color="primary">
          Cancelar
        </Button>
        <Button variant="contained" onClick={handleConfirm} color="primary">
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
