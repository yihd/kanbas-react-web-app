import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./Courses";
import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import assignments from "./Courses/Assignments"
import { courses as CoursesData } from "./Database";
import { assignments as assignmentsData } from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import Assignments from "./Courses/Assignments";
import DebugComponent from "./DebugComponent";
function Kanbas() {

  const [courses, setCourses] = useState(CoursesData); 
  const [course, setCourse] = useState({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg"
  });
  const [assignments, setAssignments] = useState(assignmentsData); // set to orignial data, which represents an array of assignment objects
  const [assignment, setAssignment] = useState({ // useful for creating a new assignment
    _id: '0',
    title: 'New Assignment',
    course: 'New Course',
    description: 'New Description',
    points: 100,
    dueDate: '',
    availableFromDate: '',
    availableUntilDate: '',
  });

  const addNewAssignment = () => {
    const newAssignment = {
      ...assignment,
      _id: new Date().getTime().toString(),
      description: new Date().getTime().toString(),
    };
    setAssignments([...assignments, newAssignment]);
  };
  
  const addNewCourse = () => {
    const newCourse = { ...course,
                        _id: new Date().getTime().toString() };
    /*setCourses([...courses, { ...course, ...newCourse }]);*/
    setCourses([...courses, newCourse]); 
  };
  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Provider store={store}>
    <div className="d-flex">
      <KanbasNavigation />
      {/* <DebugComponent />  */}
      <div style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={
              <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}
              />
            } />
            <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
            
            {/* Additional routes as necessary */}
          </Routes>
         
        </div>
      </div>
    </Provider>
  );
}

export default Kanbas;