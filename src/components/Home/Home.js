import React from 'react';
import Banner from '../Banner/Banner';

import Footer from '../Footer/Footer';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id='home'>
            <h2>Home</h2>
            <Banner></Banner>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;