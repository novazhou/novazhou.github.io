import React from "react";
import TitleContent from "./view/TitleContent";

const title = "Responsibilities";
const content =
  "Developing front end website architecture. Designing user interactions on web pages. Developing back end website applications. Creating servers and databases for functionality. Ensuring cross-platform optimization for mobile phones. Ensuring responsiveness of applications. Working alongside graphic designers for web design features. Seeing through a project from conception to finished product. Designing and developing APIs. Meeting both technical and consumer needs. Staying abreast of developments in web applications and programming languages.";

export default function Responsibilities() {
  return <TitleContent title={title} content={content} />;
}
