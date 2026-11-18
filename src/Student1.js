
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import StudentNav from "./Studentnav";
import Lognav from "./Lognav";

const API = "http://127.0.0.1:3001";

function Student1() {
  const [students, setStudents] = useState([]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [editName, setEditName] = useState(null);

  // GET STUDENT DATA
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await fetch(`${API}/getstudentdata`);

      if (!response.ok) {
        throw new Error("Failed to get student data");
      }

      const data = await response.json();

      console.log("API Response:", data);

      if (Array.isArray(data)) {
        setStudents(data);
      } else if (Array.isArray(data.students)) {
        setStudents(data.students);
      } else {
        console.error("Invalid API response:", data);
        setStudents([]);
      }
    } catch (error) {
      console.log("Get Error:", error);
      setStudents([]);
    }
  }

  // RESET FORM
  function resetForm() {
    setName("");
    setAge("");
    setCourse("");
    setCity("");
    setEmail("");
    setEditName(null);
    setShowForm(false);
  }

  // ADD / UPDATE STUDENT
  async function handleSave(e) {
    e.preventDefault();

    if (!name || !age || !course || !city || !email) {
      alert("Please fill all fields");
      return;
    }

    const student = {
      name: name,
      age: Number(age),
      course: course,
      city: city,
      email: email,
    };

    try {
      const response = await fetch(
        editName
          ? `${API}/updatestudentdata`
          : `${API}/insertstudentdata`,
        {
          method: editName ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(
            editName
              ? { oldName: editName, ...student }
              : student
          ),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Operation failed");
      }

      alert(
        editName
          ? "Student updated successfully"
          : "Student added successfully"
      );

      resetForm();
      getData();
    } catch (error) {
      console.log("Save Error:", error);
      alert(error.message);
    }
  }

  // DELETE STUDENT
  async function handleDelete(studentName) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `${API}/deletestudentdata/${encodeURIComponent(studentName)}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Delete failed");
      }

      alert("Student deleted successfully");

      getData();
    } catch (error) {
      console.log("Delete Error:", error);
      alert(error.message);
    }
  }

  return (
    <>
      <Lognav />
      <StudentNav />

      <div className="student-content">

        <h2>Student Management</h2>

        <Button
          variant="success"
          onClick={() => {
            resetForm();
            setShowForm(true);
          }}
        >
          Add Student
        </Button>

        {/* STUDENT FORM */}

        {showForm && (
          <div>
            <h4>
              {editName ? "Edit Student" : "Add Student"}
            </h4>

            <Form onSubmit={handleSave}>

              <Form.Group className="mb-3">
                <Form.Label>Student Name</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Course</Form.Label>
                <Form.Control
                  type="text"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Button variant="success" type="submit">
                {editName ? "Update" : "Save"}
              </Button>{" "}

              <Button
                variant="secondary"
                type="button"
                onClick={resetForm}
              >
                Cancel
              </Button>

            </Form>
          </div>
        )}

        <br />

        {/* STUDENT TABLE */}

        <Table bordered hover responsive>

          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Student Name</th>
              <th>Age</th>
              <th>Course</th>
              <th>City</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {students.length > 0 ? (
              students.map((student, index) => (

                <tr key={student._id || index}>

                  <td>{index + 1}</td>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.course}</td>
                  <td>{student.city}</td>
                  <td>{student.email}</td>

                  <td>

                    <Button
                      variant="warning"
                      size="sm"
                      onClick={() => {
                        setName(student.name);
                        setAge(student.age);
                        setCourse(student.course);
                        setCity(student.city);
                        setEmail(student.email);

                        setEditName(student.name);
                        setShowForm(true);
                      }}
                    >
                      Edit
                    </Button>{" "}

                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(student.name)}
                    >
                      Delete
                    </Button>

                  </td>

                </tr>

              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
                  No Student Data Found
                </td>
              </tr>
            )}

          </tbody>

        </Table>

      </div>
    </>
  );
}

export default Student1;
