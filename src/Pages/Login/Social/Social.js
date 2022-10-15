import React from 'react';
import { useAuthState, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Social = () => {
    const [user] = useAuthState(auth)
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, fUser, fLoading, fError] = useSignInWithFacebook(auth);
    const navigate = useNavigate()
    let error;
    if(gError || fError){
        error = <p>{fError?.message || gError?.message}</p>
    }

    if(user){
        navigate('/home')
    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
    }

    const handleSingInWithFacebook = () => {
        signInWithFacebook()
    }
    return (
        <section className='grid grid-cols-2'>
           <small className='text-red-500'> {error}</small>
            <button onClick={handleSignInWithGoogle} className='bg-green-600 text-white px-2 py-1 rounded-sm hover:bg-green-700 uppercase mr-1'>Google</button>
            <button onClick={handleSingInWithFacebook} className='bg-blue-600 text-white px-2 py-1 rounded-sm hover:bg-blue-700 uppercase ml-1'>Facebook</button>
        </section>
    );
};

export default Social;