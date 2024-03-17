import { assignments, enrollments, grades, users,courses,modules } from "../../Database";
import { useParams } from "react-router-dom";
import "./index.css"; 

function Grades() {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
      <h1>Grades</h1>
      <div className="table-responsive">
        <table className="table">
        <tbody>
          <thead>
            <tr> {/* Ensure that table headers are wrapped in a <tr> */}
              <th>Student Name</th>
              {as.map((assignment, index) => (
                <th key={index}>{assignment.title}</th> // Add key prop for list items
              ))}
            </tr>
          </thead>
        
            {es.map((enrollment, userIndex) => {
              const user = users.find((user) => user._id === enrollment.user);
              return (
                <tr key={userIndex}>
                  <td>{user?.firstName} {user?.lastName}</td>
                  {as.map((assignment) => {
                    const grade = grades.find(
                      (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                    return (
                      <td key={assignment._id}>
                        {grade?.grade || "N/A"} {/* Use "N/A" or some placeholder if the grade is missing */}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Grades;