import { Link } from "react-router-dom";
import "./StudentNavigation.css";

function StudentNav() {
  return (
    <div className="student-side-nav">

      <h3>Student Panel</h3>

      <Link to="/dashboard">Dashboard</Link>

      <Link to="/teacher">teacher</Link>

      <Link to="/student"> Student</Link>

      <Link to="/course"> course</Link>

    </div>
  );
}

export default StudentNav;