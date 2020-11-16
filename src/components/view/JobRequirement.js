import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { orange } from "@material-ui/core/colors";
import DiscreteSlider from "./DiscreteSlider";
import FormPropsTextFields from "./FormPropsTextFields";

const title = "Job Skills Requirement";
const subtitle = "*You don's have to know all the technologies listed below!";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 0),
  },
  paper: {
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  blue: {
    color: "#fff",
    backgroundColor: "blue",
  },
  green: {
    color: "#fff",
    backgroundColor: "green",
  },
  orange: {
    color: "fff",
    backgroundColor: orange,
  },
}));

const message = `PHP: the skill to implment php on server side`;

export default function JobRequirement() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="subtitle2" color="error">
        {subtitle}
      </Typography>

      <Paper className={classes.paper}>
        <Grid justify="center" item container spacing={1}>
          <Grid>
            <Grid justify="center" item xs spacing={1} zeroMinWidth>
              <Avatar variant="rounded" className={classes.blue}>
                front end
              </Avatar>
            </Grid>

            <Grid justify="left" item>
              <Typography>{message}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid justify="center" item container spacing={1}>
          <DiscreteSlider />
        </Grid>
        <Grid justify="center" item>
          <FormPropsTextFields />
        </Grid>
      </Paper>
    </div>
  );
}
