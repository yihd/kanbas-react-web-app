import  {courses} from "../../Kanbas/Database";
import CourseNavigation from "./Navigation";
import { HiMiniBars3 } from "react-icons/hi2";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";

function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  return (
    <div>
      <h1><HiMiniBars3 style={{ color: 'red' }} /> Course {course?.name}</h1>
     

      <div style={{ display: 'flex', height: '100vh' }}>
        <CourseNavigation />
        <div style={{ flexGrow: 1, overflowY: 'auto', paddingTop: '14px', paddingLeft: '20px' }}>
    <Routes>
      <Route path="/" element={<Navigate to="Home" />} />
      <Route path="Home" element={<Home/>} />
      <Route path="Modules" element={<Modules/>} />
      <Route path="Piazza" element={<h1>Piazza</h1>} />
      <Route path="Assignments" element={<Assignments/>} />
      <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>}/>
      <Route path="Grades" element={<Grades />} />
    </Routes>
  </div>
</div>

    </div>
  );
}
export default Courses;
