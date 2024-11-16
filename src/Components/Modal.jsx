import React from 'react';

const Modal = () => {
    const handleSubmit = e=>{
        e.preventDefault()
        console.log(e.target);
    }
    return (


        < dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle text-black" >
            <div className="modal-box">
                <form action="" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input name='FName' type="text" placeholder="First Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input name='LName' type="text" placeholder="Last Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="text" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input name='phoneNumber' type="text" placeholder="Phone Number" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Appiont Date</span>
                        </label>
                        <input name='date' type="date" placeholder="Appiont Date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input name='address' type="text" placeholder="Address" className="input input-bordered" required />
                    </div>
                    <button className='btn btn-outline my-3 btn-success'>Make Appoiment</button>
                </form>
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog >
    );
};

export default Modal;