import React from 'react';
import Banner from '../Banner/Banner';
import Count from '../Count/Count';

import Footer from '../Footer/Footer';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <Services></Services>
            <Count></Count>
            <Footer></Footer>
        </div>
    );
};

export default Home;