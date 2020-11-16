import "./App.css";
import React from "react";
import Container from "@material-ui/core/Container";

import Header from "./components/Header";
import JobDescription from "./components/JobDescription";
import Responsibilities from "./components/Responsibilities";
import JobRequirementList from "./components/JobRequirementList";
import FormPropsTextFields from "./components/view/FormPropsTextFields";
import JobRequirementAccordion from "./components/view/JobRequirementAccordion";

function App(props) {
  return (
    <div className="App">
      <Container className="Container">
        <Header />
        <JobDescription />
        <Responsibilities />
        <JobRequirementList />
        <FormPropsTextFields />
        <JobRequirementAccordion />
      </Container>
    </div>
  );
}

export default App;
