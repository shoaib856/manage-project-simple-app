/* eslint-disable react/prop-types */
import noProjects from "../assets/no-projects.png";
import Button from "./Button";
import Header2 from "./H2";
import Paragraph from "./P";

const NoProjectSelected = ({ onStartAddProject }) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjects}
        alt="no project selected"
        className="size-16 object-contain mx-auto"
      />
      <Header2>No Project Selected</Header2>
      <Paragraph>
        Select a project or get start with a new one
      </Paragraph>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
};

export default NoProjectSelected;
