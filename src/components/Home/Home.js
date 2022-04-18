import React from 'react';
import Banner from '../Banner/Banner';
import Client from '../Client/Client';

import Footer from '../Footer/Footer';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <Services></Services>
            <Client></Client>
            <Footer></Footer>
        </div>
    );
};

export default Home;