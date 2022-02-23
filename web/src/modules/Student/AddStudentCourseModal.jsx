import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import useFetch from "../../hooks/useFetch";
import { DatePicker } from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  field: {
    margin: theme.spacing(2, 0),
  },
}));

export default function AddStudentCourseModal({
  isShowing,
  toggleModal,
  studentCourses,
  onConfirm,
}) {
  const classes = useStyles();
  const { data: courses } = useFetch("courses");
  const [course, setCourse] = useState({});
  const [selectedDate, handleDateChange] = useState(new Date());

  const handleConfirm = () => {
    onConfirm && onConfirm(course);
    toggleModal();
  };

  return (
    <Dialog
      open={isShowing}
      aria-labelledby="form-dialog-title"
      className={classes.dialog}
    >
      <DialogTitle id="form-dialog-title">Nuevo Curso</DialogTitle>
      <DialogContent>
        <Autocomplete
          id="course"
          className={classes.field}
          options={courses || []}
          getOptionLabel={(option) => option.name}
          style={{ width: 300 }}
          onChange={(e, value) => setCourse(value)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Curso"
              variant="outlined"
              size="small"
            />
          )}
          getOptionDisabled={(option) => studentCourses.includes(option)}
        />
        <DatePicker
          value={selectedDate}
          onChange={handleDateChange}
          className={classes.field}
          inputVariant="outlined"
          openTo="year"
          views={["year", "month"]}
          label="Mes de inicio"
          size="small"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={toggleModal} color="primary">
          Cancelar
        </Button>
        <Button variant="contained" onClick={handleConfirm} color="primary">
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
