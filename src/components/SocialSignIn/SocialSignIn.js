import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import google from '../../image/social login/google.png'
import facebook from '../../image/social login/facebook.png'
import github from '../../image/social login/github.png'



const SocialSignIn = () => {
    return (
        <div className='d-flex justify-content-end'>
            <button className='btn btn-link'>
                <img className='' src={google} width={'20px'} alt="" srcset="" />
            </button>
            <button className='btn btn-link'>
                <img className='' src={facebook} width={'20px'} alt="" srcset="" />
            </button>
            <button className='btn btn-link'>
                <img className='' src={github} width={'20px'} alt="" srcset="" />
            </button>
        </div>
    );
};


export default SocialSignIn;