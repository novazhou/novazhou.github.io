import { Typography } from "@material-ui/core";
import React from "react";
//import JobRequirement from "./view/JobRequirement";
import jobRequirements from "./data/jobRequirements";
import JobRequirementAccordion from "./view/JobRequirementAccordion";

const title = "Job Skills Requirement";
const subtitle = "*You don's have to know all the technologies listed below!";

const Content = () => {
  const getJobRequirement = (jobRequirementObj) => {
    return (
      <div>
        <JobRequirementAccordion {...jobRequirementObj} />
      </div>
    );
  };

  return (
    <div>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="subtitle2" color="error">
        {subtitle}
      </Typography>
      {jobRequirements.map((jobRequirementObj) =>
        getJobRequirement(jobRequirementObj)
      )}
    </div>
  );
};
export default Content;
