import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
    height: 36,
  },
  input: {
    margin: theme.spacing(0, 1),
    flex: 1,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  searchIcon: {
    padding: theme.spacing(1),
  },
}));

export default function SearchBar({ value, handleChange }) {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <SearchIcon className={classes.searchIcon} />
      <Divider className={classes.divider} orientation="vertical" />
      <InputBase
        className={classes.input}
        placeholder="Buscar"
        type="search"
        value={value}
        onChange={handleChange}
      />
    </Paper>
  );
}
