import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Modal from '../Components/Modal';

const Details = () => {
    const data = useLoaderData()
    const { cost, treatment, description, image } = data
    return (
        <div
            className="hero my-5 rounded-lg bg-cover w-10/12 mx-auto"
            style={{
                backgroundImage: `url(${image})`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{treatment}</h1>
                    <p className="mb-5">
                        {description}
                    </p>
                    <button onClick={() => document.getElementById('my_modal_5').showModal()}
                        className="btn btn-primary">Get Started</button>
                </div>
                <Modal></Modal>
            </div>
        </div>
    );
};

export default Details;