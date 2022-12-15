import React, { useRef } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function UpdateProfile(){


    return(

        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>username</Form.Label>
                    <Form.Control type="text" placeholder="username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>bio</Form.Label>
                    <Form.Control type="text" placeholder="bio" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>location</Form.Label>
                    <Form.Control type="text" placeholder="location" />
                </Form.Group>
                <Button href="/Profile" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        
        </>
    )
}