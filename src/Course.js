import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import StudentNav from "./Studentnav";
import Lognav from "./Lognav";

function Course() {
  const [courses, setCourses] = useState([]);

  const [courseName, setCourseName] = useState("");
  const [trainer, setTrainer] = useState("");
  const [duration, setDuration] = useState("");
  const [fees, setFees] = useState("");
  const [mode, setMode] = useState("");
  const [status, setStatus] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [editCourse, setEditCourse] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    fetch("https://mymeeshoweb.onrender.com/getdatastudent")
      .then((response) => response.json())
      .then((data) => {

        // Only course data
        const courseData = data.filter(
          (item) => item.courseName || item.coursename
        );

        console.log("Course Data:", courseData);

        setCourses(courseData);
      })
      .catch((error) => {
        console.log("Get Error:", error);
      });
  }

  function handleSave(e) {
    e.preventDefault();

    if (
      courseName === "" ||
      trainer === "" ||
      duration === "" ||
      fees === "" ||
      mode === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    let course = {
      courseName: courseName,
      trainer: trainer,
      duration: duration,
      fees: fees,
      mode: mode,
      status: status
    };

    console.log("Course Data:", course);

    alert("Course data added to console");

    setCourseName("");
    setTrainer("");
    setDuration("");
    setFees("");
    setMode("");
    setStatus("");

    setEditCourse(null);
    setShowForm(false);
  }

  function handleDelete(courseName) {
    if (!window.confirm("Are you sure you want to delete this course?")) {
      return;
    }

    fetch(
      `https://mymeeshoweb.onrender.com/deletedatastudent?name=${encodeURIComponent(
        courseName
      )}`,
      {
        method: "DELETE"
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Delete response:", data);

        alert("Course deleted successfully");

        getData();
      })
      .catch((error) => {
        console.log("Delete error:", error);

        alert("Error deleting course");
      });
  }

  return (
    <>
    <Lognav />
      <StudentNav />

        <div className="student-content">
        <h2>Course Management</h2>

        <Button
          variant="success"
          onClick={() => {
            setEditCourse(null);

            setCourseName("");
            setTrainer("");
            setDuration("");
            setFees("");
            setMode("");
            setStatus("");

            setShowForm(true);
          }}
        >
          Add Course
        </Button>

        {showForm && (
          <div>
            <h4>
              {editCourse ? "Edit Course" : "Add Course"}
            </h4>

            <Form onSubmit={handleSave}>

              <Form.Group>
                <Form.Label>Course Name</Form.Label>

                <Form.Control
                  type="text"
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Trainer</Form.Label>

                <Form.Control
                  type="text"
                  value={trainer}
                  onChange={(e) => setTrainer(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Duration</Form.Label>

                <Form.Control
                  type="text"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Fees</Form.Label>

                <Form.Control
                  type="number"
                  value={fees}
                  onChange={(e) => setFees(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Mode</Form.Label>

                <Form.Control
                  type="text"
                  value={mode}
                  onChange={(e) => setMode(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Status</Form.Label>

                <Form.Control
                  type="text"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                />
              </Form.Group>

              <br />

              <Button variant="success" type="submit">
                {editCourse ? "Update" : "Save"}
              </Button>{" "}

              <Button
                variant="secondary"
                type="button"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </Button>

            </Form>
          </div>
        )}

        <br />

        <Table bordered hover responsive>
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Course Name</th>
              <th>Trainer</th>
              <th>Duration</th>
              <th>Fees</th>
              <th>Mode</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {courses.map((course, index) => (

              <tr key={course._id || index}>

                <td>{index + 1}</td>

                <td>
                  {course.courseName || course.coursename}
                </td>

                <td>{course.trainer}</td>

                <td>{course.duration}</td>

                <td>{course.fees}</td>

                <td>{course.mode}</td>

                <td>{course.status || "Available"}</td>

                <td>

                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() => {

                      setCourseName(
                        course.courseName || course.coursename
                      );

                      setTrainer(course.trainer);
                      setDuration(course.duration);
                      setFees(course.fees);
                      setMode(course.mode);
                      setStatus(course.status || "Available");

                      setEditCourse(
                        course.courseName || course.coursename
                      );

                      setShowForm(true);
                    }}
                  >
                    Edit
                  </Button>{" "}

                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() =>
                      handleDelete(
                        course.courseName || course.coursename
                      )
                    }
                  >
                    Delete
                  </Button>

                </td>

              </tr>

            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Course;