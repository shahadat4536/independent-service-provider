import React from 'react';
import myPic from '../../image/shahadat-7.png'

const About = () => {
    return (
        <div className='container'>
            <div className="card mb-3 mx-auto my-5" style={{ width: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4 col-sm-12">
                        <img src={myPic} className="img-fluid w-100 rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8 col-sm-12">
                        <div className="card-body">
                            <h2 className="card-title">MY GOAL</h2>
                            <p className="card-text">
                                আমার সামনের দুই-তিন মাসের লক্ষ্য হলো।
                                ইংরেজীতে কথা বলা শিখা এবং  প্রোগরামিং হিরোর ওয়েব ডেভলপমেন্ট এর বাকি কোর্সটাতে আরো সময় দিয়ে ভালো ভাবে বুঝে শেষ করা।সময়ের কাজ সময় মতো শেষ করার  অভ্যাস গড়ে তোলা।
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default About;