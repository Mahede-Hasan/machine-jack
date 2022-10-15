import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Social from '../Social/Social';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);
    const { register, formState: { errors }, handleSubmit, reset  } = useForm();
    const [sendEmailVerification, sending, verifyError] = useSendEmailVerification(auth);
    const [passwordError, setPasswordError] = useState('')

    let errorElement;
    if (error || UpdateError || verifyError) {
        errorElement = <p className='text-red-500'>{error?.message || UpdateError?.message || verifyError?.message} </p>
    }

    if (loading || updating || sending) {
        return <Loading></Loading>
    }

    if (user) {
        navigate('/home')
    }

    const onSubmit = async (data) => {
        if(data.password !== data.confirmPassword){
             setPasswordError("your password didn't match")
             return
        }

        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        await sendEmailVerification();
        reset()
        toast('Successfully Register')
    };


    return (
        <section class="login-container text-gray-600 body-font">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="lg:w-[30%] md:w-[50%] sm:w-[65%] w-[70%] mx-auto my-10 rounded-lg p-8  shadow-lg">
                    <h2 class="text-gray-900 text-2xl font-medium title-font mb-2">Register</h2>
                    <p className='text-sm mb-3 text-gray-400'>Register if you have no account</p>
                    <div class="relative ">
                        <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                        <input {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is required'
                            }

                        })} type="text" id="name" name="name" placeholder='Name' class="w-full bg-white rounded border border-gray-300   focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>
                    <div class="relative mb-4">
                        <label for="email" class="leading-7 text-sm text-gray-600">Email Address</label>

                        <input type="email"
                            name='email'
                            id='email'
                            placeholder="Enter Email"
                            class="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                },
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: 'Please valid email address'
                                }

                            })}
                        />
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </div>
                    <div class="relative mb-4">
                        <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
                        <input {...register("password", {
                            required: {
                                message: 'password is required'
                            },
                            minLength: {
                                message: 'min 6character or longer',
                                value: 6
                            }
                        })
                        } type="password" id="password" name="password" placeholder='Password' class="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        
                    </div>
                    <div class="relative mb-4">
                        <label for="confirmPassword" class="leading-7 text-sm text-gray-600">Confirm Password</label>
                        <input {...register("confirmPassword", {
                            required: {
                                message: 'confirmPassword is required'
                            },
                            minLength: {
                                message: 'min 6character or longer',
                                value: 6
                            }
                        })
                        } type="password" id="confirmPassword" name="confirmPassword" placeholder='confirm Password' class="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        <p><small className='text-red-500'>{passwordError}</small></p>
                        {errorElement}
                        <div className='flex items-center mt-2'>
                            <input onClick={() => setAgree(!agree)} className='checkbox-sm cursor-pointer' type="checkbox" name="checkbox" id="" />
                            <p className='text-sm pl-4'><span className={agree ? 'text-gray-500' : 'text-red-500'}>I have read and agree with the terms & conditions</span></p>
                        </div>
                    </div>
                    <button disabled={!agree} class="text-white w-full bg-primary py-2 px-8 focus:outline-none hover:bg-transparent hover:text-primary border hover:border-primary rounded text-lg">Register</button>
                    <div className="divider">OR</div>
                    <Social></Social>
                    <div className='pt-4 text-center'>
                        <h2 className='text-sm'>Already have an account?<Link className='text-primary pl-2' to='/login'>Login</Link> </h2>
                    </div>
                </div>
            </form>

        </section >
    );
};

export default Register;