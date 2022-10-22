import React from 'react';
import offer1 from '../../../images/offers/offer1.jpg';
import offer2 from '../../../images/offers/offer2.jpg';

const Offer = () => {
 

  return (
    <section className='mb-20'>
    <div class="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div class="bg-orange-400 p-8 md:p-12 lg:px-16 lg:py-24">
          <div class="mx-auto max-w-xl text-center">
            <h2 class="text-2xl font-bold text-white md:text-3xl">
            This month we have offers running on all products
            </h2>
  
            <p class="hidden text-white/90 sm:mt-4 sm:block">
            Constantly updated with the latest offers - these are our best power tool deals! Some of these offers are exclusive to us or special-made, so you won't find them anywhere else!
            </p>
  
            <div class="mt-4 md:mt-8">
              <a
                href="#"
                class="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
  
        <div class="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
          <img
            alt="Student"
            src={offer1}
            class="h-40 w-full object-cover sm:h-56 md:h-full"
          />
  
          <img
            alt="Student"
            src={offer2}
            class="h-40 w-full object-cover sm:h-56 md:h-full"
          />
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default Offer;