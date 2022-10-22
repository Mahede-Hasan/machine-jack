import React from 'react';
import { useForm } from 'react-hook-form';


const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
       
        const url = `http://localhost:5000/powertools` 
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
               console.log(result)

            })

    };

    return (
        <div>
            <h1 className='text-2xl text-center my-2'>Add new product</h1>
            <form className='flex flex-col mx-auto lg:w-[30%] md:w-[60%] sm:w-[90%]' onSubmit={handleSubmit(onSubmit)}>
                <input className='w-[100%] mx-auto mb-2 py-2 border border-primary pl-2 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-sm outline-none' placeholder='Product Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='w-[100%] mx-auto mb-2 py-2 border border-primary pl-2 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-sm outline-none' type='number' placeholder='Product Price' {...register("price")} />
                <input className='w-[100%] mx-auto mb-2 py-2 border border-primary pl-2 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-sm outline-none' type="text" placeholder='Img URL' {...register("img")} />
                <input className='bg-primary text-white w-[100%] mx-auto mb-10 cursor-pointer rounded-sm py-1' type="submit" value='Add Product' />
            </form>
        </div>
    );
};

export default AddProduct;