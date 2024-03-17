import React , {useEffect, useState} from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import { HiCheckCircle } from "react-icons/hi";
import { HiEllipsisVertical } from "react-icons/hi2";
import { addAssignment, updateAssignment } from "../assignmentsReducer";
import { useDispatch, useSelector } from "react-redux";
//mport "../../index.css";
import { KanbasState } from "../../../store";

function AssignmentEditor() {

    const { assignmentId } = useParams();
    const { courseId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const assignments = useSelector((state:KanbasState) => state.assignmentsReducer.assignments);
    const [assignment, setAssignment] = useState(
        {
            _id: null,
            title: "",
            description: "",
            due: "",
            totalPoints: 0,
            course: "",
        }
    );

    useEffect(() => {
        if(assignmentId === "new") {
            setAssignment({
                _id: null,
                title: "",
                description: "",
                due: "",
                totalPoints: 0,
                course: courseId ?? "",
            });
        } else {
            const existedAssignment = assignments.find((a) => a._id === assignmentId);
            if(existedAssignment) {
                setAssignment(existedAssignment);
            }
            else {
                // can not find the assignment
            }
            
        }
    }, [assignmentId, assignments, courseId]);

    const [newAssignment, setNewAssignment] = useState( () => {
        const params = new URLSearchParams(window.location.search);
        return params.get('id') === "new";
    });

    const handleSave = async() => {
        if(assignmentId === "new") {
            const newId = new Date().getTime().toString();
            const newAssignment = {
                ...assignment, 
                _id: newId,
                course: courseId ?? "",
            };
            const actionResult = dispatch(addAssignment(newAssignment));
            console.log('New Assignment added:', actionResult.payload);
            navigate(`/Kanbas/Courses/${courseId}/Assignments`);
        } else {
            const updatedAssignment = {
                ...assignment,
                course: courseId ?? "",
            };
            dispatch(updateAssignment(assignment));
            navigate(`/Kanbas/Courses/${courseId}/Assignments`);
        }
        
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAssignment({
            ...assignment,
            title: e.target.value,
        });
    };

    const handleDecriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setAssignment({
            ...assignment,
            description: e.target.value,
        });
    };

    const handleDueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAssignment({
            ...assignment,
            due: e.target.value,
        });
    };

    const handleTotalPointsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAssignment({
            ...assignment,
            totalPoints: parseInt(e.target.value),
        });
    };


    return (
        <>
            <div className="d-flex justify-content-end me-4 mt-2">
                <div className="me-3 mt-1 text-success">
                    <HiCheckCircle /> Published
                </div>
                <button type="button" className="btn btn-outline-dark btn-light">
                    <HiEllipsisVertical />
                </button>
            </div>
            <hr className="me-4" />
            <div>
                
                <label htmlFor="assignmentTitle" className="form-label">Assignment Name</label>
                <input 
                    id = "assignmentTitle"
                    className="form-control mb-2"
                    value={newAssignment ? "" : assignment.title} 
                    onChange={handleTitleChange} />
                <textarea 
                    className="form-control mt-4 pb-2 pt-2" 
                    rows={4}
                    value={newAssignment ? "" : assignment.description}
                    onChange = {handleDecriptionChange} ></textarea>
            </div>
            <div className="container mt-4" style={{ marginLeft: '-160px' }}>
                            <form>
                                <div className="mb-3 d-flex align-items-center">
                                    <div style={{ flex: 1, textAlign: 'right' }}>
                                    <label htmlFor="Points" style={{ marginRight: '10px' }}>Points</label>
                                    </div>
                                    <input type="number" className="form-control" id="AssignTo" defaultValue="100" style={{ flex: 2 }} 
                                    onChange={handleTotalPointsChange}/>
                                    
                                  </div>
                          
                              <div className="mb-3 d-flex align-items-center">
                                 <div style={{ flex: 1, textAlign: 'right' }}>


                                 <label htmlFor="AssignmentGroup" style={{ marginRight: '10px', whiteSpace: 'nowrap' }}>Assignment Group</label>

                                </div>
                                <select className="form-select" id="AssignmentGroup" style={{ flex: 2 }}>
                                  <option selected>ASSIGNMENTS</option>
                                  <option>QUIZZES</option>
                                </select>
                              </div>
                          
                              <div className="mb-3 d-flex align-items-center">
                              <div style={{ flex: 1, textAlign: 'right' }}>

                              <label htmlFor="DisplayGrade" style={{ marginRight: '10px', whiteSpace: 'nowrap' }}>Display Grade as</label>

                                </div>
                                <select className="form-select" id="DisplayGrade" style={{ flex: 2 }}>
                                  <option selected>Percentage</option>
                                  <option >Numeric</option>
                                </select>
                              </div>

                              <div className="mb-3 d-flex align-items-center">
                              <div style={{ flex: 1, textAlign: 'right' }}>

                              <label htmlFor="SubmissionType" style={{ marginRight: '10px', whiteSpace: 'nowrap' }}>Submission Type</label>

                                </div>
                                <select className="form-select" id="SubmissionType" style={{ flex: 2 }}>
                                  <option selected>PDF</option>
                                  <option >words</option>
                                </select>
                              </div>
                          
                              <div className="form-check mb-3" style={{ marginLeft: '350px' }}>
                                <input className="form-check-input" type="checkbox" id="finalGradeCheck" />
                                <label className="form-check-label" htmlFor="finalGradeCheck">
                                    Do not count this assignment towards the final grade
                                </label>
                                </div>

                            
                          
                                <div className="mb-3 d-flex align-items-center">
                                <div style={{ flex: 1, textAlign: 'right' }}>
                                    <label htmlFor="AssignTo" style={{ marginRight: '10px' }}>Assign to</label>
                                </div>
                                <input type="text" className="form-control" id="AssignTo" defaultValue="Everyone" style={{ flex: 2 }} />
                                </div>
                                <div className="mb-3 d-flex align-items-center">
                                <div style={{ flex: 1, textAlign: 'right' }}>
                                    <label htmlFor="DueDate" style={{ marginRight: '10px' }}>Due</label>
                                </div>
                                <input type="date" className="form-control" id="DueDate" style={{ flex: 2 }} />
                                </div>

                            
                                <div className="mb-3 d-flex align-items-center">
                                    <div style={{ flex: 1, textAlign: 'right' }}>
                                        <label htmlFor="AvailableDate" style={{ marginRight: '10px' }}>Available</label>
                                    </div>
                                    <input type="date" className="form-control" id="AvailableDate" style={{ flex: 2 }} />
                                    </div>

                                    <div className="mb-3 d-flex align-items-center">
                                    <div style={{ flex: 1, textAlign: 'right' }}>
                                        <label htmlFor="UntilDate" style={{ marginRight: '10px' }}>Until</label>
                                    </div>
                                    <input type="date" className="form-control" id="UntilDate" style={{ flex: 2 }} />
                                    </div>

                                    <div className="d-flex justify-content-end align-items-center mb-3">
                                    <div className="form-check mr-2">
                                        <input className="form-check-input" type="checkbox" id="notifyChange" />
                                        <label className="form-check-label" htmlFor="notifyChange">
                                        Notify users that this content has changed
                                        </label>
                                    </div>
                                    <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-secondary btn-outline-dark btn-lg btn-light me-2">
                                        Cancel
                                    </Link>
                                    <button type="button" onClick={handleSave} className="btn btn-primary btn-lg btn-danger ">
                                        Save
                                    </button>
                                  </div>
                                    </form>

                                    

                                    </div>
        </>
    );
}

export default AssignmentEditor;