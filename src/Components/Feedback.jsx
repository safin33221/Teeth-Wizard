import React from 'react';

const Feedback = ({ feed }) => {
    const {name,userImg,review} = feed
    return (
        <div className="card bg-base-100 w-96 shadow-xl p-4 mb-10">
            <div className='flex justify-between items-center'>
                <div className='flex gap-2'>
                <img src={userImg} className='w-14 h-14 rounded-full' alt="" />
                <h2 className="card-title">{name}</h2>
                </div>
                <p>{new Date().toLocaleDateString()}</p>
            </div>
            <div className="card-body">
                <p>{review}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Feedback;