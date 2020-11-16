import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

export default function FormPropsTextFields() {
  return (
    <div>
      <Typography color="primary">
        Describe your skills with 1 sentence.
      </Typography>
      <TextField
        required
        id="standard-required"
        label="Required"
        placeholder="Describe your skills using 1 sentence."
        fullWidth
      />
    </div>
  );
}
