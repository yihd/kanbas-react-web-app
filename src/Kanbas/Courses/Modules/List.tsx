import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
function ModuleList() {
    
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
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
      <ul className="list-group wd-modules">
        {modulesList.map((module) => (
          <li
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson) => (
                  <li className="list-group-item">
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