import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: "70%",
  },
});

const marks = [
  {
    value: 1,
    label: "Beginner",
  },
  {
    value: 2,
    label: "Junior",
  },
  {
    value: 3,
    label: "Intermediate",
  },
  {
    value: 4,
    label: "Senior",
  },
  {
    value: 5,
    label: "Expert",
  },
];

export default function DiscreteSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        id="discrete-slider"
        color="primary"
        align="center"
        gutterBottom
      >
        Skill level - Estimate the skill level you have.
      </Typography>

      <Slider
        defaultValue={3}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks={marks}
        min={1}
        max={5}
      />
    </div>
  );
}
