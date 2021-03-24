import React from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  addIcon: {},
});

export default function FormDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        color="primary"
        onClick={handleOpen}
        className={classes.addIcon}
        startIcon={<Add />}
        variant="contained"
      >
        Crear alumno
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Crear Alumno</DialogTitle>
        <DialogContent>
          <TextField required id="firstName" label="Nombre" fullWidth />
          <TextField required id="lastName" label="Apellido" fullWidth />
          <TextField id="dni" label="Dni" fullWidth />
          <TextField
            multiline
            rows={3}
            id="description"
            label="Observaciones"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleClose} color="primary">
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
