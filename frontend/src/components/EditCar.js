import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';

function EditCar() {
    const [id, setId] = useState('');
    const [formData, setFormData] = useState({
        model: '',
        make: '',
        year: '',
        registration: '',
        owner: '',
        address: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${process.env.REACT_APP_API_URL}/api/cars/${id}`, formData);
            alert('Car updated successfully!');
        } catch (error) {
            alert('Error updating car: ' + error.message);
        }
    };

    return (
        <Container className="my-component-wrapper">
            <h2 className="component-title">Edit Car Details</h2>
            <Form onSubmit={handleSubmit}>
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
                {['model', 'make', 'year', 'registration', 'owner', 'address'].map((field) => (
                    <Form.Group className="mb-3" key={field}>
                        <Form.Label>{field.charAt(0).toUpperCase() + field.slice(1)}</Form.Label>
                        <Form.Control
                            name={field}
                            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                            value={formData[field]}
                            onChange={handleChange}
                            required={field !== 'year'}
                        />
                    </Form.Group>
                ))}
                <Button variant="primary" type="submit">Update Car</Button>
            </Form>
        </Container>
    );
}

export default EditCar;
