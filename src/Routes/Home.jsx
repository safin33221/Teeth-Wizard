import React from 'react';
import Banner from '../Components/Banner';
import { Link, NavLink, useLoaderData } from 'react-router-dom';
import ServiceCard from '../Components/ServiceCard';
import Feedback from '../Components/Feedback';

const Home = () => {
    const data = useLoaderData()

    const {services,FeedBack} = data

    return (
        <div className='w-11/12 mx-auto'>
            <Banner></Banner>
            <section className='grid grid-cols-3 gap-3'>
                {
                    services.slice(0, 5).map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </section>

            <NavLink to='/AllTreatments' className='btn mx-auto  bg-blue-600 text-white font-bold my-5'>Show More</NavLink>


            <section className='grid grid-cols-3 gap-3'>
                {
                    FeedBack.map(feed =><Feedback key={feed.id} feed={feed}></Feedback>)
                }
            </section>

        </div>
    );
};

export default Home;