import React from "react";
import { TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "row",
  },
  formSection: {
    "&:not(:last-child)": {
      marginRight: theme.spacing(6),
    },
  },
  field: {
    margin: theme.spacing(1, 0),
  },
  subtitle: {
    marginBottom: theme.spacing(1),
  },
}));

const StudentForm = ({ studentData = {}, onChange }) => {
  const classes = useStyles();

  const renderField = (name, label, required = false, rows) => (
    <TextField
      multiline={rows}
      rows={rows}
      required={required}
      id={name}
      name={name}
      label={label}
      onChange={(e) => onChange(e)}
      className={classes.field}
      value={studentData[name]}
      variant="outlined"
      fullWidth
    />
  );

  return (
    <div className={classes.form}>
      <div className={classes.formSection}>
        <Typography variant="h6" color="primary" className={classes.subtitle}>
          Datos personales
        </Typography>
        {renderField("firstName", "Nombre", true)}
        {renderField("lastName", "Apellido", true)}
        {renderField("dni", "Dni")}
      </div>
      <div className={classes.formSection}>
        <Typography variant="h6" color="primary" className={classes.subtitle}>
          Contacto
        </Typography>
        {renderField("address", "Domicilio")}
        {renderField("city", "Localidad")}
        {renderField("email", "Correo electrónico")}
        {renderField("description", "Observaciones", false, 3)}
      </div>
    </div>
  );
};

export default StudentForm;
