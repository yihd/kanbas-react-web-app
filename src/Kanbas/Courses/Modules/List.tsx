import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { KanbasState } from "../../store"; 
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

interface Lesson {
  name: string;
  // Other properties here
  id?: string; // Optional properties with '?'
  description?: string;
}

// Your React component and other code follow here...

function ModuleList() {
    
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => state.modulesReducer.module);
  const dispatch = useDispatch();
  

  
  



  const modulesList = moduleList.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Toggle dropdown visibility
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  return (
    <>
    
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <button className="four-buttons btn btn-primary" type="button">Collapse All</button>
                <button className="four-buttons btn btn-primary" type="button">View Progress</button>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle custom-dropdown-toggle" type="button" onClick={toggleDropdown}>
                        Publish All<i className="fas fa-ellipsis-v"></i> {/* Ensure FontAwesome is correctly imported */}
                    </button>
                    {isDropdownOpen && (
                        <div className="dropdown-menu dropdown-menu-end" onClick={(e) => e.stopPropagation()}>
                            <a className="dropdown-item" href="#">Option1</a>
                            <a className="dropdown-item" href="#">Option2</a>
                            <a className="dropdown-item" href="#">Option3</a>
                        </div>
                    )}
                </div>
                <button className="four-buttons btn btn-primary" type="button">Module</button>
            </div>
            
        

            <div className="container mt-4">
  {/* Row for Module Name and Add button */}
  <div className="row mb-3">
    <div className="col-12 col-md-9">
      <input
        type="text"
        className="form-control"
        placeholder="Module Name"
        value={module.name}
        onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
      />
    </div>
    <div className="col-12 col-md-3 d-grid">
      <button
        className="btn btn-success"
        onClick={() => dispatch(addModule({ ...module, course: courseId }))}
      >
        Add
      </button>
    </div>
  </div>

  {/* Row for Module Description and Update button */}
  <div className="row mb-3">
    <div className="col-12 col-md-9">
      <input
        type="text"
        className="form-control"
        placeholder="Module Description"
        value={module.description}
        onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
      />
    </div>
    <div className="col-12 col-md-3 d-grid">
      <button
        className="btn btn-primary" // Use a different class if you want another color
        onClick={() => dispatch(updateModule(module))}
      >
        Update
      </button>
    </div>
  </div>
</div>


      <ul className="list-group wd-modules">
      <li className="list-group-item">
      
                
      </li>

        {modulesList
        .filter((module) => module.course === courseId)
        .map((module,index) => (
          <li key={index} className="list-group-item"
            onClick={() => setSelectedModule(module)}>
              

            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
                <div style={{ display: 'inline-block', marginLeft: '10px' }}>
  <button className="btn btn-sm btn-outline-primary me-2"
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering click events on parent elements
            dispatch(setModule(module));
          }}>
    Edit
  </button>

  <button className="btn btn-sm btn-outline-danger"
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering click events on parent elements
            dispatch(deleteModule(module._id));
          }}>
    Delete
  </button>
</div>

              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson:Lesson, index:number) => (
                  <li className="list-group-item" key={index}>
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;