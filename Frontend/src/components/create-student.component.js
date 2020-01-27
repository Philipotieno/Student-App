import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CreateStudent extends Component {

    constructor(props) {
        super(props)
    
        this.onChangeStudentName = this.onChangeStudentName.bind(this);
        this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
        this.onChangeStudentRollno = this.onChangeStudentRollno.bind(this);
    
        this.state = {
            name: '',
            email: '',
            rollno: ''
        }
    }
    
    onChangeStudentName(e) {
        this.setState({name: e.target.value})
    }
    
    onChangeStudentEmail(e) {
        this.setState({email: e.target.value})
    }
    
    onChangeStudentRollno(e) {
        this.setState({rollno: e.target.value})
    }
    
    onSubmit(e) {
        e.preventDefault()
    
        console.log(`Student created successfully`);
        console.log(`Name: ${this.state.name}`);
        console.log(`Email: ${this.state.email}`);
        console.log(`Rollno: ${this.state.rollno}`);
    
        this.setState({
            name: '',
            email: '',
            rollno: ''
        })
    }
    
    render() {
        return (
            <div class='form-wrapper'>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId='Name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' value={this.state.name} onChange={this.onChangeStudentName} />
                    </Form.Group>

                    <Form.Group controlId='Email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='text' value={this.state.email} onChange={this.onChangeStudentEmail} />
                    </Form.Group>

                    <Form.Group controlId='Name'>
                        <Form.Label>Roll No </Form.Label>
                        <Form.Control type='text' value={this.state.rollno} onChange={this.onChangeStudentRollno} />
                    </Form.Group>

                    <Button variant='danger' size='lg' block='block' type='submit'>
                        Create Student
                    </Button>

                </Form>
            </div>
        );
    }
}

export default CreateStudent;