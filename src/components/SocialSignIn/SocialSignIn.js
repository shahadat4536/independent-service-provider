import React from 'react';
import google from '../../image/social login/google.png'
import facebook from '../../image/social login/facebook.png'
import github from '../../image/social login/github.png'
import auth from '../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';


const SocialSignIn = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

    // let errorElement;

    // console.log(googleError, githubError);
    // if (googleError || githubError) {
    //     errorElement = <p>Error:{googleError?.githubError}</p>;
    // }
    return (
        <div className='d-flex justify-content-end'>
            <button onClick={() => signInWithGoogle()} className='btn btn-link'>
                <img className='' src={google} width={'20px'} alt="" srcset="" />
            </button>
            <button className='btn btn-link'>
                <img className='' src={facebook} width={'20px'} alt="" srcset="" />
            </button>
            <button onClick={() => signInWithGithub()} className='btn btn-link'>
                <img className='' src={github} width={'20px'} alt="" srcset="" />
            </button>
        </div>
    );
};


export default SocialSignIn;