import React from 'react';
import ServiceCard from '../Components/ServiceCard';
import { useLoaderData } from 'react-router-dom';

const AllTreatments = () => {
    const services = useLoaderData()
    return (

        <section className='grid grid-cols-3 gap-3 w-11/12 mx-auto py-10'>
            {
                services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
            }
        </section>
    );
};

export default AllTreatments;