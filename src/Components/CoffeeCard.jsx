import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee }) => {
    const { _id, name, price, quantity, photo } = coffee;

    const handleDelete = (_id) => {
        console.log(_id);


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // start deleting the coffee
                fetch(`http://localhost:3000/coffees/${_id}`, {
                    method: 'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.deleteCount){
                        Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });

                    }
                   
                })

            
                
            }
        });
    }





    return (
        <div className="hero bg-base-300 my-2 ">
            <div className="hero-content flex-col lg:flex-row ml-6">
                <img
                    src={photo}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div className='flex  w-full justify-around'>
                    <div className=''>
                        <h2 className="">Name:{name}</h2>
                        <p className="py-6">Price:{price}</p>
                        <p>Quantity:{quantity}</p>
                    </div>
                    <div className="join join-vertical space-y-2  ml-10">
                        <Link to={`/coffee/${_id}`}>
                        <button className="btn join-item">View</button>
                        </Link>
                        <Link to={`/updateCoffee/${_id}`}>
                         <button className="btn join-item">Edit</button>
                        </Link>

                       
                        <button onClick={() => handleDelete(_id)} className="btn join-item">X</button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default CoffeeCard;