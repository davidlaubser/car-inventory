import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import axios from 'axios';

function DeleteCar() {
    const [id, setId] = useState('');
    const [error, setError] = useState('');

    const handleDelete = async () => {
        try {
            await axios.delete(`${process.env.REACT_APP_API_URL}/api/cars/${id}`);
            alert('Car deleted successfully!');
            setId('');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <Container className="my-component-wrapper">
            <h2 className="component-title">Delete Car</h2>
            {error && <Alert variant="danger">{`Error deleting car: ${error}`}</Alert>}
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Car ID</Form.Label>
                    <Form.Control
                        name="id"
                        placeholder="Car ID"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        required
                    />
                </Form.Group>
                <Button variant="danger" onClick={handleDelete}>Delete Car</Button>
            </Form>
        </Container>
    );
}

export default DeleteCar;
