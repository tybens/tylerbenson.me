import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    minHeight: "100vh",
    margin: "0 10%",
  },
}));

const Article = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      {children}
    </Grid>
  );
};

export default Article;
