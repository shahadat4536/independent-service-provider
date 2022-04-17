import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialSignIn from '../SocialSignIn/SocialSignIn';
import login from '../../image/login.jpg'
const Login = () => {
    return (
        <div style={{ width: '370px' }} className='mx-auto container mt-5 my-5 shadow-lg rounded-3 px-0 '>
            <img className='w-100 rounded-top' src={login} alt="" srcset="" />
            <div className='my-5 py-4 px-4'>
                <div className='d-flex justify-content-between align-items-center mb-5'>
                    <h2 className='fw-light'>Sign In</h2>
                    <SocialSignIn></SocialSignIn>
                </div>
                <div>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Accept terms and conditions" />
                        </Form.Group>
                        <Button className='w-100 text-white' variant="info" type="submit">
                            Sign In
                        </Button>
                    </Form>
                    <div className='d-flex justify-content-between mt-2'>
                        <Link className='text-decoration-none text-center' to='/signup'>Create New Account</Link>
                        <Link className='text-decoration-none text-secondary' to="/forgotpassword">Forgot Password</Link>
                    </div>
                </div>
                {/* <div className='w-100'>
                    <Link className='text-decoration-none text-center' to='/signup'>Create New Account</Link>
                </div> */}
            </div>
        </div>
    );
};

export default Login;