import InstructorTag from "./InstructorTag";
import { Link } from "react-router-dom";


const Home = ({ instructors }) => {
  return (
    <>
      <h2>When in doubt, ask for help!</h2>
      {instructors.map((instructor) => (
        <InstructorTag
          instructor={instructor}
          key={instructor.slug}
        />
      ))}
    </>
  );
};

export default Home;
