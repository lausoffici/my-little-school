import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import StudentForm from "./StudentForm";

const useStyles = makeStyles((theme) => ({
  addIcon: {
    marginLeft: 5,
  },
}));

export default function AddStudentDialog({ onConfirm }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [studentData, setStudentData] = useState({});

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
      setOpen(false);
    } catch (err) {
      // prints error
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };

  const onChange = ({ target: { name, value } }) =>
    setStudentData((prevState) => ({ ...prevState, [name]: value }));

  return (
    <>
      <Button
        color="primary"
        onClick={handleOpen}
        className={classes.addIcon}
        startIcon={<Add />}
        variant="contained"
        size="small"
      >
        Crear alumno
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        className={classes.dialog}
      >
        <DialogTitle id="form-dialog-title">Nuevo Alumno</DialogTitle>
        <DialogContent>
          <StudentForm onChange={onChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button variant="contained" onClick={handleConfirm} color="primary">
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
