import React, {useState} from "react";
import { FaCheckCircle, FaEllipsisV, FaPlus, FaPlusCircle } from "react-icons/fa";
import { Link, useParams, useNavigate } from "react-router-dom";
//import "../index.css"
import { HiEllipsisVertical, HiPlus } from "react-icons/hi2";
import { deleteAssignment, selectAssignment, updateAssignment } from "./assignmentsReducer";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../store";


// ------- interface
interface Assignment {
    _id: string;
    title: string;
    description: string;
    due: string;
    totalPoints: number;
    course: string;
}

function Assignments() {
    const {courseId} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const assignments = useSelector((state:KanbasState) => state.assignmentsReducer.assignments);

    const assignmentList = assignments.filter( (assignment) => assignment.course === courseId);

    const AddAssignment = () => {
        navigate(`/Kanbas/Courses/${courseId}/Assignments/new`);
    };

    const DeleteAssignment = (assignmentId: string) => {
      if (window.confirm("Are you sure you want to delete this assignment?")) {
        dispatch(deleteAssignment(assignmentId));
      }
    }

//     const UpdateAssignment = (assignmentId: string) => {
//       dispatch(selectAssignment(assignmentId));

//     // Navigate to the update page for the assignment
//     navigate(`/Kanbas/Courses/${courseId}/Assignments/${assignmentId}/Edit`);
// };

const UpdateAssignment = (assignmentId: string) => {
  // Navigate to the edit page for the assignment
  navigate(`/Kanbas/Courses/${courseId}/Assignments/update/${assignmentId}`);
};



    return (
      <>
        <div className="container-fluid">
    <div className="row">
      <div className="col-md-3">
        <input type="text" className="form-control" placeholder="Search for Assignments" id="assignmentName"/>
      </div>
      <div className="col-md-9 d-flex justify-content-end align-items-center">
        <button className="btn btn-secondary me-2">+ Group</button> {/* Adjusted class names for styling */}
        <button type="button" className="btn btn-danger me-1" onClick = {AddAssignment}> + Assignment</button>
        <button className="btn btn-secondary">
          <FaEllipsisV />
        </button>
      </div>
    </div>
  </div>
  
  
 

  
  
  
  
        <ul className="list-group wd-modules">
          <li className="list-group-item">
          <li className="list-group-item">
          
                  
        </li>
  
        <div>
          <FaEllipsisV className="me-2" /> ASSIGNMENTS
          <span className="float-end d-flex align-items-center">
            <FaCheckCircle className="text-success" style={{ alignSelf: 'lower' }} />
            <div onClick={AddAssignment}>
              <FaPlusCircle className="ms-2" />
            </div>
          
          </span>
        </div>


            <ul className="list-group">
              {assignmentList.map((assignment) => (
                <li className="list-group-item">
                  <FaEllipsisV className="me-2" />
                  <Link
                     to={`/Kanbas/Courses/Assignments/${assignment._id}`}>{assignment.title}</Link>
                
                  <span className="float-end">
                    <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" />
                    

                    <button
              type="button"
              style={{ color: 'blue', backgroundColor: 'transparent', borderColor: 'blue' }}
              className="btn me-1"
              onClick={() => UpdateAssignment(assignment._id)}
            >
              Edit
            </button>
    
                    <button type="button" className="btn btn-sm btn-outline-danger" onClick={ () => {
                            DeleteAssignment(assignment._id);
                          }}>Delete</button></span>
                </li>))}
            
            </ul>
          </li>
        </ul>
      </>
  );}
  export default Assignments;