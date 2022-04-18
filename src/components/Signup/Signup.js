import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialSignIn from '../SocialSignIn/SocialSignIn';
import login from '../../image/login.jpg';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';


const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true }); //email verification

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    let navigate = useNavigate();
    let location = useLocation();
    let from = location?.state?.from?.pathname || "/";

    let errorElement;

    if (error) {
        errorElement = <p>{error.message}</p>;
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (loading) {
        <Loading></Loading>
    }
    const handleSignUp = (event) => {
        event.preventDefault()
        createUserWithEmailAndPassword(email, password);
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
                        <Button className='w-100 text-white' variant="info" type="submit">
                            Sign Up
                        </Button>
                    </Form>
                    {errorElement}
                    <div className='mt-3 text-center'>
                        <Link className='text-decoration-none ' to="/login">Already have an account</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;