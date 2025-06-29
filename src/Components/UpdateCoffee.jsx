import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';


const UpdateCoffee = () => {
    const { _id, name, quantity, price, taste, supplier, photo, details } = useLoaderData();

    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const formdata = new FormData(form);
        const UpdateCoffee = Object.fromEntries(formdata.entries())
        console.log(UpdateCoffee);

        fetch(`http://localhost:3000/coffees/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(UpdateCoffee)
        })
            .then(res => res.json())
            .then(data=>{
                if(data.modifiedCount){
                       Swal.fire({
                position: "top",
                icon: "success",
                title: "coffee Updated Successfully",
                showConfirmButton: false,
                timer: 1500
            });

                }
         

            console.log(data)
        })


    }
    return (
        <div>
            <form onSubmit={handleUpdateCoffee}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Name</label>
                        <input type="text" className="input  w-full " name='name' defaultValue={name} placeholder="Enter Coffe Name" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Quantity</label>
                        <input type="text" className="input  w-full " name='quantity' defaultValue={quantity} placeholder="Enter Coffe Quantity" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Supplier</label>
                        <input type="text" className="input  w-full " name='supplier' defaultValue={supplier} placeholder="Enter Coffe Supplier Name" />
                    </fieldset>


                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Taste</label>
                        <input type="text" className="input  w-full " name='taste' defaultValue={taste} placeholder="Enter Coffe Taste" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Price</label>
                        <input type="text" className="input  w-full " name='price' defaultValue={price} placeholder="Each Cup price" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Details</label>
                        <input type="text" className="input  w-full " name='details' defaultValue={details} placeholder="Enter Coffe Details" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Photo</label>
                        <input type="text" className="input  w-full " name='photo' defaultValue={photo} placeholder="Enter Coffe Photo" />
                    </fieldset>




                </div>

                <input type="submit" className="btn w-full mt-6 bg-amber-100" value='Add Coffee' />

            </form>
        </div>
    );
};

export default UpdateCoffee;