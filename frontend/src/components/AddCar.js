import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import axios from 'axios';

function AddCar() {
    const [formData, setFormData] = useState({
        model: '',
        make: '',
        year: '',
        registration: '',
        owner: '',
        address: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/api/cars`, formData);
            alert('Car added successfully!');
            setFormData({ model: '', make: '', year: '', registration: '', owner: '', address: '' });
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <Container className="my-component-wrapper">
            <h2 className="component-title">Add a New Car</h2>
            {error && <Alert variant="danger">{`Error adding car: ${error}`}</Alert>}
            <Form onSubmit={handleSubmit}>
                {['model', 'make', 'year', 'registration', 'owner', 'address'].map((field) => (
                    <Form.Group className="mb-3" key={field}>
                        <Form.Label>{field.charAt(0).toUpperCase() + field.slice(1)}</Form.Label>
                        <Form.Control
                            name={field}
                            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                            value={formData[field]}
                            onChange={handleChange}
                            type={field === 'year' ? 'number' : 'text'}
                            required
                        />
                    </Form.Group>
                ))}
                <Button variant="primary" type="submit">Add Car</Button>
            </Form>
        </Container>
    );
}

export default AddCar;
