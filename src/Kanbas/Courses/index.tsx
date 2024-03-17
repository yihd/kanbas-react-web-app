import  {assignments, courses} from "../../Kanbas/Database";
import CourseNavigation from "./Navigation";
import { HiMiniBars3 } from "react-icons/hi2";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";

import Grades from "./Grades";
import AssignmentEditor from "./Assignments/Editor/index";
interface Course {
  _id: string;
  name: string;
  // Add other course properties here as needed, for example:
  number?: string;
  startDate?: string;
  endDate?: string;
  image?: string;
}

interface CoursesProps {
  courses: Course[];
}


function Courses({ courses }: CoursesProps) {
  const { courseId, assignmentID } = useParams();
  const course = courses.find((course) => course._id === courseId);
  //const assignment = assignments.find((assignment) => assignment._id = assi)
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
      {/* <Route path="Assignments/:assignmentId/assignments/Editor/index" element={<AssignmentEditor/>}/> */}
      {/* <Route path="Assignments/:assignmentId/assignments/Editor/update" element={<AssignmentUpdate />} /> Added route */}
      {/* <Route path="/Kanbas/Courses/:courseId/Assignments/Editor/" element={<AssignmentEditor />} />  */}
      {/* <Route path="Assignments/:assignmentId/Editor/index" element={<AssignmentEditor/>}/>  */}
      {/* <Route path="Assignments/new/:assignmentID" element={<AssignmentEditor/>}/> */}


  
    
      <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
      {/* <Route path="/Assignments/update/:assignmentId" element={<AssignmentEditor />} /> */}
      <Route path="/Assignments/update/:assignmentId" element={<AssignmentEditor />} />

      {/* <Route path="Assignments/Edit/:assignmentID" element={<AssignmentUpdate />} /> */}

      {/* <Route path="/courses/:courseId/assignments/edit/:assignmentId" element={<AssignmentUpdate />} /> */}
      {/* <Route path="Kanbas/Courses/:courseId/Assignments/index" element={<AssignmentUpdate />}/> */}
      <Route path="Grades" element={<Grades />} />
    </Routes>
  </div>
</div>

    </div>
  );
}
export default Courses;
