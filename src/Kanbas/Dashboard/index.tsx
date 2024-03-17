import React, { useState } from "react";
import { Link } from "react-router-dom";
import { courses as CoursesData } from "../Database";
import Kanbas from "..";
interface Course {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  image: string;
}
interface DashboardProps {
  courses: Course[];
  course: Course;
  setCourse: (course: Course) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
}
const inputStyle = {
  border: '2px solid blue',
  marginBottom: '10px', // Adds space below each input
};

// Defining a new style for the button
const buttonStyle = {
  backgroundColor: 'blue', // Sets the background color to blue
  color: 'white', // Text color set to white
  border: 'none',
  padding: '10px 20px', // Adds padding to increase the button size for better UX
  cursor: 'pointer', // Changes the cursor to pointer on hover
  marginTop: '10px', // Adds space above the button
};

const Dashboard: React.FC<DashboardProps> = (
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; }) => {
  return (
    <div className="p-4">
      <h1>Dashboard</h1>
      <h5>Course</h5>
      
      <div className="container mt-4">
  <div className="row mb-3">
    <div className="col-12 col-md-9">
      <input
        type="text"
        className="form-control"
        placeholder="Course Name"
        value={course.name}
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
    </div>
  </div>
  
  <div className="row mb-3">
    <div className="col-12 col-md-9">
      <input
        type="text"
        className="form-control"
        placeholder="Course Number"
        value={course.number}
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
      />
    </div>
  </div>
  
  <div className="row mb-3">
    <div className="col-12 col-md-9">
      <input
        type="date"
        className="form-control"
        placeholder="Start Date"
        value={course.startDate}
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
      />
    </div>
  </div>
  
  <div className="row mb-3">
    <div className="col-12 col-md-9">
      <input
        type="date"
        className="form-control"
        placeholder="End Date"
        value={course.endDate}
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
      />
    </div>
  </div>

  <div className="row mb-3">
    <div className="col-12 col-md-3 d-grid">
      <button
        className="btn btn-success"
        onClick={addNewCourse}
      >
        Add
      </button>
    </div>
  </div>
</div>


      <h2>Published Courses (3)</h2>
      <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img
                  src={`/images/${course.image}`}
                  className="card-img-top"
                  style={{ height: 150 }}
                />
                <div className="card-body">
                  <Link
                    className="card-title"
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{
                      textDecoration: "none",
                      color: "navy",
                      fontWeight: "bold",
                    }}
                  >
                    {course.name}
                  </Link>
                  <p className="card-text">{course.name}</p>
                  <Link
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    className="btn btn-primary"
                  >
                    Go
                  </Link>
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}
                  >
                    Edit
                  </button>

                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}
                  >
                    Delete
                  </button>
                  <button onClick={updateCourse}>Update</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
  