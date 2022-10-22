import React from 'react';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Social = () => {

    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithFacebook] = useSignInWithFacebook(auth);
 
    const handleSignInWithGoogle = () => {
        signInWithGoogle()
    }

    const handleSingInWithFacebook = () => {
        signInWithFacebook()
    }
    return (
        <section className='flex justify-center'>
            <button onClick={handleSignInWithGoogle} className='bg-green-600 w-full text-white px-2 py-1 rounded-sm hover:bg-green-700 uppercase mr-1'>Google</button>
            <button onClick={handleSingInWithFacebook} className='bg-blue-600 w-full text-white px-2 py-1 rounded-sm hover:bg-blue-700 uppercase ml-1'>Facebook</button>
        </section>
    );
};

export default Social;