import React, { use } from 'react';
import { AuthContext } from '../Contacts/AuthContext';

const SignIn = () => {

    const userInfo=use(AuthContext);
    console.log(userInfo)
    return (
        <div>
            SignIn method


        </div>
    );
};

export default SignIn;