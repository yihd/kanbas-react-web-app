import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import './index.css';
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <>
      <div className="container-fluid">
  <div className="row">
    <div className="col-md-3">
      <input type="text" className="form-control" placeholder="Search for Assignments" id="assignmentName"/>
    </div>
    <div className="col-md-9 d-flex justify-content-end align-items-center">
      <button className="btn btn-secondary me-2">+ Group</button> {/* Adjusted class names for styling */}
      <button className="btn btn-danger me-2 icon">+ Assignment</button> {/* Adjusted class names for styling */}
      <button className="btn btn-secondary">
        <FaEllipsisV />
      </button>
    </div>
  </div>
</div>
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <Link
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>
    </>
);}
export default Assignments;