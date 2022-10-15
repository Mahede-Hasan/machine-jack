import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import Social from '../Social/Social';
import './Login.css';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
    );
    const emailRef = useRef('')
    const passwordRef = useRef('')

    let errorElement;
    if (error || resetError) {
        errorElement = <p className='text-red-500'>{error?.message || error?.message}</p>
    }

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        navigate('/home')
    }

    const handleSubmitLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }

    const handleReset = () => {
        const email = emailRef.current.value;
        console.log(email)
        sendPasswordResetEmail(email)
        toast('sent email')
    }

    return (
        <section class="login-container  body-font">
            <form onSubmit={handleSubmitLogin}>
                <div class="lg:w-[30%] md:w-[50%] sm:w-[65%] w-[70%] mx-auto my-10  rounded-lg p-8  shadow-lg">
                    <h2 class="text-gray-900 text-2xl font-medium title-font mb-2">Login</h2>
                    <p className='text-sm mb-3 text-gray-400'>Login if you already have an account</p>
                    <div class="relative mb-4">
                        <label for="full-name" class="leading-7 text-sm text-gray-600">Email Address</label>
                        <input type="email" ref={emailRef} id="email" name="email" placeholder='Email Address' class="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                    </div>
                    <div class="relative mb-4">
                        <label for="email" class="leading-7 text-sm text-gray-600">Password</label>
                        <input type="password" ref={passwordRef} id="password" name="password" placeholder='Password' class="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                        <div className='flex justify-between items-center my-2'>
                            <h2 className='text-primary'>Forget Password?</h2>
                            <Link onClick={handleReset} className='text-primary'>Reset Password</Link>
                        </div>

                    </div>
                    <p className='text-red-500'>{errorElement}</p>
                    <button class="text-white w-full bg-primary py-2 px-8 focus:outline-none hover:bg-transparent hover:text-primary border hover:border-primary rounded text-lg">Login</button>
                    <div className="divider">OR</div>
                    <Social></Social>
                    <div className='pt-4 text-center'>
                        <h2 className='text-sm'>Don't have an account? <Link className='text-primary pl-2' to='/register'>Register now</Link> </h2>
                    </div>
                </div>
            </form>

        </section>
    );
};

export default Login;