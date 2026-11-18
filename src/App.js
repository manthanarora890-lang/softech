import Softechpage from "./Softechpage";
import About from "./About";
import Contact from "./Contact";
import Features from "./Features";
import Dashboard from "./Dashboard";
import Login1 from "./Login1";
import Student1 from "./Student1";
import Teacher from "./Teacher";
import Course from "./Course"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>

      <Routes>

        <Route path="/" element={<Softechpage />} />

        <Route path="/home" element={<Softechpage />} />

        <Route path="/features" element={<Features />} />

        <Route path="/about-us" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/login" element={<Login1 />} />
        
        <Route path="/student" element={<Student1 />} />

        <Route path="/teacher" element={<Teacher />} />

        <Route path="/course" element={<Course />} />

        <Route path="/login" element={<Softechpage />} />


      </Routes>

    </Router>
    </>
  );
}

export default App;