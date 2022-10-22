import React from 'react';
import man1 from '../../../src/images/blog/man1.webp'
import man2 from '../../../src/images/blog/man2.jpg'
import man3 from '../../../src/images/blog/man3.jpg'
import man4 from '../../../src/images/blog/man4.jpg'

const Blogs = () => {
  return (
    <section class="text-gray-600 px-8 body-font overflow-hidden">
      <div class="container px-5 pt-24 pb-10 mx-auto">
        <div class="flex flex-wrap -m-12">
          <div class="p-12 md:w-1/2 flex flex-col items-start">
            <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest ">PowerTools</span>
            <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4 text-primary">Pro Tools review</h2>
            <p class="leading-relaxed mb-8">Pro Tool Reviews provides power tool reviews and hand tool reviews and comparisons for the construction industry professional. Find information about tools and the world of commercial and residential construction.</p>
            <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
              <a href='#' class="text-indigo-500 inline-flex items-center">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>5.2K
              </span>
              <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>24
              </span>
            </div>
            <a class="inline-flex items-center">
              <img alt="blog" src={man1} class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
              <span class="flex-grow flex flex-col pl-4">
                <span class="title-font font-medium text-gray-900">Harry</span>
                <span class="text-gray-400 text-xs tracking-widest mt-0.5">UI DEVELOPER</span>
              </span>
            </a>
          </div>
          <div class="p-12 md:w-1/2 flex flex-col items-start">
            <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">HandTools</span>
            <h2 class="sm:text-3xl text-2xl title-font font-medium  mt-4 mb-4 text-primary">ToolGuyd</h2>
            <p class="leading-relaxed mb-8">ToolGuyd is a founder, scientist, engineer. Find posts to learn about the newest tools, best tools, and proper tools. Find the Latest Tool Reviews, New Tool Previews, Best Tool Picks & Deals Blog.</p>
            <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
              <a href='#' class="text-indigo-500 inline-flex items-center">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
            <a class="inline-flex items-center">
              <img alt="blog" src={man2} class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
              <span class="flex-grow flex flex-col pl-4">
                <span class="title-font font-medium text-gray-900">Sandon</span>
                <span class="text-gray-400 text-xs tracking-widest mt-0.5">UX DESIGNER</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-12">
          <div class="p-12 md:w-1/2 flex flex-col items-start">
            <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest ">PowerTools</span>
            <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4 text-primary">Tools in action</h2>
            <p class="leading-relaxed mb-8">Tools in Action is an online publication dedicated to professional power tool reviews. Find helpful guides and information for professionals and homeowners information about power tools and OPE products. We review the latest in the tool world and report back to you.</p>
            <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
              <a href='#' class="text-indigo-500 inline-flex items-center">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>3.5K
              </span>
              <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>14
              </span>
            </div>
            <a class="inline-flex items-center">
              <img alt="blog" src={man3} class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
              <span class="flex-grow flex flex-col pl-4">
                <span class="title-font font-medium text-gray-900">Brandy</span>
                <span class="text-gray-400 text-xs tracking-widest mt-0.5">React Developer</span>
              </span>
            </a>
          </div>
          <div class="p-12 md:w-1/2 flex flex-col items-start">
            <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">HandTools</span>
            <h2 class="sm:text-3xl text-2xl title-font font-medium  mt-4 mb-4 text-primary">The Tool Corner</h2>
            <p class="leading-relaxed mb-8">KMS Tools and Equipment is an industrial distributor that carries a huge selection of tools, from value-priced occasional-use tools to top-quality, heavy-duty professional tools. Find Air Tools Autobody Hand Tools Air Compressors Construction Metalworking Tools Outdoor Tools & Equipment Power, Tools Safety Equipment, Shop Equipment Tool Boxes Welders Woodworking.</p>
            <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
              <a href='#' class="text-indigo-500 inline-flex items-center">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>4.2K
              </span>
              <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>12
              </span>
            </div>
            <a class="inline-flex items-center">
              <img alt="blog" src={man4} class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
              <span class="flex-grow flex flex-col pl-4">
                <span class="title-font font-medium text-gray-900">William</span>
                <span class="text-gray-400 text-xs tracking-widest mt-0.5">JavaScript Developer</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;