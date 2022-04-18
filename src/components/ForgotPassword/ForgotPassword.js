import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Loading/Loading';

const ForgotPassword = () => {

    const [email, setEmail] = useState('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    if (sending) {
        return <Loading></Loading>
    }

    const handlePasswordReset = async (event) => {
        event.preventDefault()
        await sendPasswordResetEmail(email);
        toast('Sent email')


    }



    return (
        <div style={{ width: '370px' }} className='mx-auto container mt-5 my-5 shadow-lg rounded-3 px-5 py-5 '>

            <Form onSubmit={handlePasswordReset}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Button
                    className='w-100 text-white mt-3' variant="info" type="submit">
                    Reset Password
                </Button>
            </Form>
            <ToastContainer />
        </div >
    );
};

export default ForgotPassword;