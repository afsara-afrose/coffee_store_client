import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        console.log(formData.entries())
        const newCoffee = Object.fromEntries(formData.entries());
        console.log(newCoffee)
        

        fetch('http://localhost:3000/coffees', {
            method: 'post',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log("Coffe Added on database Successfully");
                    Swal.fire({
                        title: "coffee added successfully!",
                        icon: "success",
                        draggable: true
                    });
                  //  form.reser();[Its not working]


                }

            })

    }
    return (
        <div className='p-10'>
            <div className='p-12 text-center space-y-4'>
                <h1 className='text-6xl text-amber-800'>Add New Coffee</h1>
                <p className='bg-blue-200'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>


            </div>
            <form onSubmit={handleAddCoffee}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Name</label>
                        <input type="text" className="input  w-full " name='name' placeholder="Enter Coffe Name" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Quantity</label>
                        <input type="text" className="input  w-full " name='quantity' placeholder="Enter Coffe Quantity" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Supplier</label>
                        <input type="text" className="input  w-full " name='supplier' placeholder="Enter Coffe Supplier Name" />
                    </fieldset>


                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Taste</label>
                        <input type="text" className="input  w-full " name='test' placeholder="Enter Coffe Taste" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Price</label>
                        <input type="text" className="input  w-full " name='price' placeholder="Each Cup price" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Details</label>
                        <input type="text" className="input  w-full " name='details' placeholder="Enter Coffe Details" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Photo</label>
                        <input type="text" className="input  w-full " name='photo' placeholder="Enter Coffe Photo" />
                    </fieldset>




                </div>

                <input type="submit" className="btn w-full mt-6 bg-amber-100" value='Add Coffee' />

            </form>

        </div>
    );
};

export default AddCoffee;