import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import AddCar from './components/AddCar';
import EditCar from './components/EditCar';
import DeleteCar from './components/DeleteCar';
import ViewAllCars from './components/ViewAllCars';
import ViewOldCars from './components/ViewOldCars';
import UpdateMultipleCars from './components/UpdateMultipleCars';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Navbar expand="lg" sticky="top" className="mb-4">
        <Container>
        <Navbar.Brand as={Link} to="/">Car Inventory App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/add">Add Car</Nav.Link>
              <Nav.Link as={Link} to="/edit">Edit Car</Nav.Link>
              <Nav.Link as={Link} to="/delete">Delete Car</Nav.Link>
              <Nav.Link as={Link} to="/view-all">View All Cars</Nav.Link>
              <Nav.Link as={Link} to="/view-old">View Old Cars</Nav.Link>
              <Nav.Link as={Link} to="/update-multiple">Update Multiple Cars</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddCar />} />
          <Route path="/edit" element={<EditCar />} />
          <Route path="/delete" element={<DeleteCar />} />
          <Route path="/view-all" element={<ViewAllCars />} />
          <Route path="/view-old" element={<ViewOldCars />} />
          <Route path="/update-multiple" element={<UpdateMultipleCars />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
