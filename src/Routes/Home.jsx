import React from 'react';
import Banner from '../Components/Banner';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../Components/ServiceCard';

const Home = () => {
    const services = useLoaderData()
    
    return (
        <div className='w-11/12 mx-auto'>
            <Banner></Banner>
            <section className='grid grid-cols-3 gap-3'>
                {
                    services.map(service =><ServiceCard key={service.id} service={service}></ServiceCard> )
                }
            </section>
        </div>
    );
};

export default Home;