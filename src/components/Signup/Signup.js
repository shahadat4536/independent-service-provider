import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialSignIn from '../SocialSignIn/SocialSignIn';
import login from '../../image/login.jpg';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // const handleEmail = e => {

    // }

    // const handlePassword = e => {

    // }

    // const handleConfirmPassword = e => {

    // }

    const handleSignUp = (event) => {
        event.preventDefault()
        createUserWithEmailAndPassword(email, password);
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }
    return (
        <div style={{ width: '370px' }} className='mx-auto container mt-5 my-5 shadow-lg rounded-3 px-0 '>
            <img className='w-100 rounded-top' src={login} alt="" srcset="" />
            <div className='my-5 py-4 px-4'>
                <div className='d-flex justify-content-between align-items-center mb-5'>
                    <h2 className='fw-light'>Sign Up</h2>
                    <SocialSignIn></SocialSignIn>
                </div>
                <div>
                    <Form onSubmit={handleSignUp}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Accept terms and conditions" />
                        </Form.Group>
                        <Button className='w-100 text-white' variant="info" type="submit">
                            Sign Up
                        </Button>
                    </Form>
                    <div className='mt-3 text-center'>
                        <Link className='text-decoration-none ' to="/login">Already have an account</Link>
                    </div>
                </div>
                {/* <div className='w-100'>
                    <Link className='text-decoration-none text-center' to='/signup'>Create New Account</Link>
                </div> */}
            </div>
        </div>
    );
};

export default Signup;