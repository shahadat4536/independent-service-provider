import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <div className='my-5'>
                <div className="card">
                    <div className="card-header">
                        Q-1.  Difference between authorization and authentication
                    </div>
                    <div className="card-body">
                        <table className="table table-bordered border-dark text-center ">
                            <thead>
                                <tr>
                                    <th scope="col-6">Authorization</th>
                                    <th scope="col-6">Authentication</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Authorization নির্ধারন করে যে user কোন কোন resources access করবে।
                                    </td>
                                    <td>Authentication কে user তা যাচাই করে।</td>

                                </tr>
                                <tr>

                                    <td>Authorization কাজ করে organization কর্তৃক বিভিন্ন settings দ্বারা।</td>
                                    <td>Authentication কাজ করে user  এর passwords, OTP, biometric তথ্য দ্বারা।</td>

                                </tr>
                                <tr>

                                    <td>Authorization নির্ধারণ করে user এর কি কি permission আছে।</td>
                                    <td>Authentication নির্ধারণ করে ব্যক্তিটি user কিনা।</td>

                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
            <div className='my-5'>
                <div className="card">
                    <div className="card-header">
                        Q-2.  Why are you using firebase? What other options do you have to implement authentication?
                    </div>
                    <div className="card-body">
                        <p className="card-text">কারন google firebase অনেক সুরক্ষিত ও নিরাপদ ব্যাবহারকারীদের তথ্য রাখার জন্য। আমরা নিজেরা ও এমন authentication system বানাতে পারি কিন্তু ঐ টা  সুরক্ষিত নাও হতে পারে। বিভিন্ন সাইবার হামলা ব্যবহারকারীদের বিভিন্ন গুরুত্বপূর্ন তথ্য হ্যাকারদের হাতে যেতে পার। তাই বিভিন্ন  সাইবার নিরাপত্তা জনিত কারনে আমার Google firebase ব্যবহার করি।</p>
                        <h6>Other Options in Google Firebase</h6>
                        <ul>
                            <li>Cloud Firestore</li>
                            <li>Cloud Functions</li>
                            <li>Authentication</li>
                            <li>Hosting</li>
                            <li>Cloud Storage</li>
                            <li>Google Analytics</li>
                            <li>Predictions</li>
                            <li>Cloud Messaging</li>
                            <li>Dynamic Links</li>
                            <li>Remote Config</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='my-5'>
                <div className="card">
                    <div className="card-header">
                        Q-3.  What other services does firebase provide other than authentication
                    </div>
                    <div className="card-body">
                        <ul>
                            <li>Firebase Alternatives</li>
                            <li>Back4App</li>
                            <li>Pricing</li>
                            <li>Core Features</li>
                            <li>AWS Amplify</li>
                            <li>Backendless</li>
                            <li>Kuzzle</li>
                            <li>Supabase</li>
                            <li>appwrite</li>
                            <li>Hasura</li>
                            <li>Nhost</li>
                            <li>Deployd</li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;