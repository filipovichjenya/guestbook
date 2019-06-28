import React from "react";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



class FormComponent extends React.Component {
    constructor() {
        super();
        this.state = { name: '', message: '' };

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit(event) {
        event.preventDefault();
        if(!this.state.name) this.state.name = 'Anonymous';

        const response = await fetch('/message', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        });

        if (response.status === 200) {
            this.props.updateData(this.state);
            this.setState({ name: '', message: '' });
        }else{
            console.log('failed to save data');
        }
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }


    render() {
        return (
            <div className="formWrapper">
                <Form className='form' onSubmit={this.onSubmit}>
                    <Form.Group>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type="text" placeholder="Anonymous" name="name" value={this.state.name} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Message:</Form.Label>
                        <Form.Control as="textarea" required placeholder="Text" name="message" value={this.state.message} onChange={this.handleChange} />
                    </Form.Group>
                    <Button variant="outline-info" type="submit">Send</Button>
                </Form>
            </div>

        )
    }
}




export default FormComponent;