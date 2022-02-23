import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  field: {
    margin: theme.spacing(1, 0),
  },
}));

const Input = (props) => {
  const { field } = useStyles();
  return (
    <TextField
      id={props.name}
      name={props.name}
      label={props.label}
      value={props.value}
      onChange={props.onChange}
      multiline={!!props.rows}
      rows={props.rows}
      required={props.required}
      className={field}
      variant="outlined"
      size="small"
      fullWidth
    />
  );
};

export default Input;
