import React from 'react';
import facebook from '../../image/Social Sign In/facebook-brands.svg'
import youtube from '../../image/Social Sign In/youtube-brands-light.svg'
import twitter from '../../image/Social Sign In/twitter-brands.svg'


const Footer = () => {
    return (
        <div style={{ height: '210px' }} className='bg-dark mt-5 row'>

            <div className='col-lg-6 col-sm-12 d-flex text-white justify-content-evenly fs-6 fw-light align-items-center'>
                <div className='lh-1 py-2'>
                    <h6>Judge's Court Chamber</h6>
                    <p> <small>7/1 (3rd Floor),</small> </p>
                    <p> <small>Room No. 3011,</small> </p>
                    <p> <small>Court House Street, Dhaka.</small> </p>
                </div>
                <div className='lh-1 py-2 mb-0'>
                    <h6>Supreme Court Chamber</h6>
                    <p> <small>Bhuiyan & Associates,</small> </p>
                    <p> <small>Room No. 521 (5021) ,</small> </p>
                    <p> <small>Supreme Court Bar Dhaka.</small> </p>
                    <p> <small></small>  </p>
                </div>
            </div>
            <div className='col-lg-6 col-sm-12 d-flex text-white justify-content-evenly fs-6 fw-light align-items-center'>
                <div>
                    <h6>Follow me internet</h6>
                    <a href="https://www.facebook.com/shahadatofficial007" target="_blank">
                        <img className='w-25 text-white' height={"30px"} src={facebook} alt="" srcset="" />
                    </a>
                    <a href="https://twitter.com/Shahadat01954" target="_blank">
                        <img className='w-25 text-white' height={"30px"} src={twitter} alt="" srcset="" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCh-S5xZ3YRzhbkfugzr1Wrg" target="_blank">
                        <img className='w-25 text-white' height={"30px"} src={youtube} alt="" srcset="" />
                    </a>

                </div>
            </div>

        </div >
    );
};

export default Footer;