import React from "react";
import TitleContent from "./view/TitleContent";

const title = "Job Description";
const content =
  "We are looking for a highly skilled computer programmer who is comfortable with both front and back end programming. Full Stack Developers are responsible for developing and designing front end web architecture, ensuring the responsiveness of applications and working alongside graphic designers for web design features, among other duties. Full Stack Developers will be required to see out a project from conception to final product, requiring good organizational skills and attention to detail.";

export default function JobDescription() {
  return (
    <div>
      <TitleContent title={title} content={content} />
    </div>
  );
}
