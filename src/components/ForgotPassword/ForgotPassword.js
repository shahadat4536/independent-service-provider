import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const ForgotPassword = () => {

    const [email, setEmail] = useState('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    // const handlePasswordReset = event => {
    //     setEmail(event.target.value)
    // }
    return (
        <div style={{ width: '370px' }} className='mx-auto container mt-5 my-5 shadow-lg rounded-3 px-5 py-5 '>

            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>
                <Button
                    onClick={async () => {
                        await sendPasswordResetEmail(email);
                        alert('Sent email');
                    }}
                    className='w-100 text-white mt-3' variant="info" type="submit">
                    Reset Password
                </Button>
            </Form>
        </div >
    );
};

export default ForgotPassword;