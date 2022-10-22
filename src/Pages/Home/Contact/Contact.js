import React from 'react';

const Contact = () => {
  return (
    <section class="text-gray-600 body-font relative">
      <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div class="lg:w-1/2 md:w-1/2 ml-8 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe  class="absolute inset-0 w-[100%] h-[520px]" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10609.328765409919!2d-122.441345289264!3d37.76255611669279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1665643177626!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div class="bg-white flex w-[85%] mx-auto mb-10  relative py-6 rounded shadow-md">
            <div class="lg:w-1/2 px-6">
              <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
              <p class="mt-1"><small>4096 17th St
                San Francisco, CA 94114, USA</small></p>
            </div>
            <div class="lg:w-1/3 px-6 mt-4 lg:mt-0">
              <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
              <a class="text-indigo-500 leading-relaxed" href='https://mail.google.com/mail/'><small>contact.mahede@gmail.com</small></a>
              <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
              <p class="leading-relaxed"><small>123-456-7890</small></p>
            </div>
          </div>
        </div>
        <div class="lg:w-1/3 md:w-1/2 mx-auto mb-10 bg-white flex flex-col md:mx-auto w-full md:py-4 mt-8 md:mt-0">
          <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
          <p class="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
          <div class="relative mb-4">
            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div class="relative mb-4">
            <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
          <button class="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-orange-500 rounded text-lg">Button</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;