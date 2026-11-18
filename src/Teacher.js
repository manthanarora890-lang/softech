import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import StudentNav from "./Studentnav";
import Lognav from "./Lognav";

function Trainer() {
  const [trainers, setTrainers] = useState([]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [editName, setEditName] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    fetch("https://mymeeshoweb.onrender.com/getdatastudent")
      .then((response) => response.json())
      .then((data) => {
        const trainerData = data.filter((item) => item.teaname);

        console.log("Trainer Data:", trainerData);

        setTrainers(trainerData);
      })
      .catch((error) => {
        console.log("Get Error:", error);
      });
  }

  function handleSave(e) {
    e.preventDefault();

    if (
      name === "" ||
      age === "" ||
      course === "" ||
      city === "" ||
      email === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    let trainer = {
      teaname: name,
      teaexperience: age,
      teasubject: course,
      teacity: city,
      teaemail: email,
    };

    console.log("Trainer Data:", trainer);

    alert("Trainer data added to console");

    setName("");
    setAge("");
    setCourse("");
    setCity("");
    setEmail("");

    setShowForm(false);
  }

  function handleDelete(name) {
    if (!window.confirm("Are you sure you want to delete this trainer?")) {
      return;
    }

    fetch(
      `https://mymeeshoweb.onrender.com/deletedatastudent?name=${encodeURIComponent(
        name
      )}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Delete response:", data);
        alert("Trainer deleted successfully");
        getData();
      })
      .catch((error) => {
        console.log("Delete error:", error);
        alert("Error deleting trainer");
      });
  }

  return (
    <>
<Lognav />

      <StudentNav />

      <div className="student-content">
        <h2>Trainer Management</h2>

        <Button
          variant="success"
          onClick={() => {
            setEditName(null);
            setName("");
            setAge("");
            setCourse("");
            setCity("");
            setEmail("");
            setShowForm(true);
          }}
        >
          Add Trainer
        </Button>

        {showForm && (
          <div>
            <h4>{editName ? "Edit Trainer" : "Add Trainer"}</h4>

            <Form onSubmit={handleSave}>
              <Form.Group>
                <Form.Label>Trainer Name</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Experience</Form.Label>
                <Form.Control
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <br />

              <Button variant="success" type="submit">
                {editName ? "Update" : "Save"}
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

        <Table bordered hover>
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Trainer Name</th>
              <th>Experience</th>
              <th>Subject</th>
              <th>City</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {trainers.map((trainer, index) => (
              <tr key={trainer._id || index}>
                <td>{index + 1}</td>
                <td>{trainer.teaname}</td>
                <td>{trainer.teaexperience}</td>
                <td>{trainer.teasubject}</td>
                <td>{trainer.teacity}</td>
                <td>{trainer.teaemail}</td>

                <td>
                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() => {
                      setName(trainer.teaname);
                      setAge(trainer.teaexperience);
                      setCourse(trainer.teasubject);
                      setCity(trainer.teacity);
                      setEmail(trainer.teaemail);
                      setEditName(trainer.teaname);
                      setShowForm(true);
                    }}
                  >
                    Edit
                  </Button>{" "}

                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(trainer.teaname)}
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

export default Trainer;