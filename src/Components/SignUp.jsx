import React, { use } from 'react';
import { AuthContext } from '../Contacts/AuthContext';

const SignUp = () => {
    const {createUser}= use (AuthContext);
    console.log(createUser);

    const handleSignUp=e=>{
        e.preventDefault();
        const form=e.target;
        const formData=new FormData(form);
        const email=formData.get('email')
        const password=formData.get('password')
        console.log(email,password)
       

       //create User for Firebase 
       createUser(email,password)
       .then(result=>{
        console.log(result)

       })
       .catch(error=>{
        console.log(error)
       })
    }
        
   
    return (
        <div>
            <div className="card  mt-12 max-w-md mx-auto shrink-0 shadow-2xl bg-gray-200">
                <h1 className="text-5xl font-bold">SignUp now!</h1>
                <div className="card-body">
                    <form  onSubmit={handleSignUp}className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" className="input" name='name' placeholder="User Name" />
                        <label className="label">Address</label>
                        <input type="text" className="input" name='address' placeholder="Address" />
                        <label className="label">Phone</label>
                        <input type="text" className="input" name='phone' placeholder="phoneNo" />
                        <label className="label">Photo</label>
                        <input type="text" className="input" name='photo' placeholder="Photo" />
                        <label className="label">Email</label>
                        <input type="email" className="input" name='email' placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input"name='password' placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </form>
                </div>
            </div>
        </div>


    );
};

export default SignUp;