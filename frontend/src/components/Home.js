import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <Container className="my-component-wrapper">
            <div className="hero-section text-center">
                <h2 className="component-title mt-4">Welcome to the Car Inventory App</h2>
                <p>Effortlessy organise and oversee your car inventory in one place with our tools.</p>
            </div>
            <Nav className="flex-column mt-4">
                <h4>Quick Navigation</h4>
                <Nav.Link as={Link} to="/add">➕ Add Car</Nav.Link>
                <Nav.Link as={Link} to="/edit">✏️ Edit Car</Nav.Link>
                <Nav.Link as={Link} to="/delete">❌ Delete Car</Nav.Link>
                <Nav.Link as={Link} to="/view-all">📋 View All Cars</Nav.Link>
                <Nav.Link as={Link} to="/view-old">🚗 View Old Cars</Nav.Link>
                <Nav.Link as={Link} to="/update-multiple">🔄 Update Multiple Cars</Nav.Link>
            </Nav>
        </Container>
    );
}

export default Home;
