import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import axios from 'axios';

function UpdateMultipleCars() {
    const [criteria, setCriteria] = useState('');
    const [updates, setUpdates] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const parsedCriteria = JSON.parse(criteria);
            const parsedUpdates = JSON.parse(updates);
            await axios.put(`${process.env.REACT_APP_API_URL}/api/cars/multiple`, {
                criteria: parsedCriteria,
                updates: parsedUpdates,
            });
            alert('Cars updated successfully!');
            setCriteria('');
            setUpdates('');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <Container className="my-component-wrapper">
            <h2 className="component-title">Update Multiple Cars</h2>
            {error && <Alert variant="danger">{`Error updating cars: ${error}`}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Criteria (JSON format)</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Criteria (JSON format)"
                        value={criteria}
                        onChange={(e) => setCriteria(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Updates (JSON format)</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Updates (JSON format)"
                        value={updates}
                        onChange={(e) => setUpdates(e.target.value)}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit">Update Cars</Button>
            </Form>
        </Container>
    );
}

export default UpdateMultipleCars;
