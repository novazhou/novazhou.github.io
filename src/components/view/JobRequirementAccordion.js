import "../../App.css";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DiscreteSlider from "./DiscreteSlider";
import FormPropsTextFields from "./FormPropsTextFields";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  paper: {
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));

export default function SimpleAccordion(props) {
  const classes = useStyles();

  const { id, jobTitle, jobTag, description } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading} color="primary">
              {jobTag} - {jobTitle}
            </Typography>
          </AccordionSummary>
          <AccordionDetails class="center">
            <Typography>{description}</Typography>
            <Grid justify="center" item container spacing={1}>
              <DiscreteSlider />
            </Grid>
            <Grid justify="center" item>
              <br />
              <FormPropsTextFields />
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Paper>
    </div>
  );
}
