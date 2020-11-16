import "../../App.css";

import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: "auto",
    padding: theme.spacing(2),
  },
}));

export default function TitleContent(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h5">{props.title}</Typography>
      <Paper className={classes.paper}>
        <Grid item xs container spacing={2}>
          <Typography variant="body2">
            <Box textAlign="left">{props.content}</Box>
          </Typography>
        </Grid>
      </Paper>
    </div>
  );
}
