import React, { useState, useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import Review from '../../components/review';

const slides = [
  { url: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.png?text=Slide+1', alt: 'Slide 1'},
  { url: 'https://images.unsplash.com/photo-1466428996289-fb355538da1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.png?text=Slide+2', alt: 'Slide 2'},
  { url: 'https://images.unsplash.com/photo-1466428996289-fb355538da1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.png?text=Slide+3', alt: 'Slide 3'},
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const commonText = "WHERE SOUND BECOMES ART"; // The text to be displayed on all slides
  const commonText2 = "Unleash your music’s potential at our recording studio. With cutting-edge tech and skilled professionals, we craft exceptional sound that captures your artistry’s essence."; // The text to be displayed on all slides


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 10000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={slide.url} alt={slide.alt} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 data-aos='fade-left' data-aos-duration='2000' className="text-white text-7xl font-bold font-mono tracking-widest ">{commonText}</h1>
            <h1 data-aos='fade-right' data-aos-duration='2000'className="text-gray-200 text-2xl  font-bold font-mono tracking-widest mt-8 px-8">{commonText2}</h1>
          </div>
          
          
          

        </div>
      ))}
    </div>

    <div className="relative h-screen w-full overflow-hidden flex py-10 bg-black">
          <div className='flex-1  p-8 '>
              <h1 data-aos='fade-up' data-aos-duration='2000' className="text-3xl font-bold mb-4 text-yellow-500 ">About Detune Studio</h1>
              <hr data-aos='fade-right' data-aos-duration='1000'></hr>
              <h2 data-aos='fade-down' data-aos-duration='2000' className="text-5xl font-mono text-white mt-3">Harmonizing Dreams, Crafting Soundscapes.</h2>

              <div className='flex overflow-hidden mt-12'>
                <div className='flex-1 pr-3'>
                    <h1 data-aos='fade-left' data-aos-duration='2000' className='font-mono text-xl text-white'>Amid the city’s rhythm, our recording studio emerges as a sanctuary for musical spirits. Here, collaboration thrives and notes are woven into tapestries of emotion. Sound engineers sculpt waves of</h1>
                </div>
                <div className='flex-1 px-3'>
                    <h1 data-aos='fade-right' data-aos-duration='2000' className='font-mono text-xl text-white'>Amid the city’s rhythm, our recording studio emerges as a sanctuary for musical spirits. Here, collaboration thrives and notes are woven into tapestries of emotion. Sound engineers sculpt waves of</h1>
                </div>
              </div>

              <button data-aos='fade-up' data-aos-duration='2000' className='text-white border border-white px-6 py-4 mt-20'>Read More</button>
          </div>

          <div data-aos='fade-up' data-aos-duration='2000' className='flex-1 bg-no-repeat animated-background' style={{ backgroundImage: 'url(https://dkkit.rometheme.pro/detune/wp-content/uploads/sites/85/2023/08/7RWZXNF.png)'}}>
      </div>

    </div>

    <div className="relative h-screen w-full overflow-hidden flex py-16  bg-black">
      <div className='flex-1 px-16 '>
          <div className='flex overflow-hidden'>
            <div className='flex-1 '>
              <div data-aos='fade-left' data-aos-duration='2000' class="max-w-xs h-36  p-4 border border-gray-300 rounded-md">
                              <p class="text-sm text-gray-700">
                                This is a small text box created using Tailwind CSS.
                              </p>
              </div>
              <div data-aos='fade-up' data-aos-duration='2000' class="max-w-xs  mt-9 h-36 p-4 border border-gray-300 rounded-md">
                              <p class="text-sm text-gray-700">
                                This is a small text box created using Tailwind CSS.
                              </p>
                </div>
            </div>
            <div className='flex-1'>
              <div data-aos='fade-down' data-aos-duration='2000' class="max-w-xs h-36  p-4 border mt-16 border-gray-300 rounded-md">
                              <p class="text-sm text-gray-700">
                                This is a small text box created using Tailwind CSS.
                              </p>
              </div>
              <div data-aos='fade-left' data-aos-duration='2000' class="max-w-xs h-36 p-4 border mt-16 border-gray-300 rounded-md">
                              <p class="text-sm text-gray-700">
                                This is a small text box created using Tailwind CSS.
                              </p>
              </div>
            </div>
                  
                

          </div>

      </div>
      <div className='flex-1'>

      <div className=' p-8 '>
              <h1 data-aos='fade-up' data-aos-duration='2000' className="text-3xl font-bold mb-4 text-yellow-500 ">Detune Studio Features</h1>
              <hr data-aos='fade-right' data-aos-duration='1000'></hr>
              <h2 data-aos='fade-down' data-aos-duration='2000' className="text-5xl font-mono text-white mt-3">Harmonizing Dreams, One Track At A Time.</h2>

              <div className='flex overflow-hidden mt-12'>
                <div className='flex-1 pr-3'>
                    <h1 data-aos='fade-left' data-aos-duration='2000' className='font-mono text-xl text-white'>Amid the city’s rhythm, our recording studio emerges as a sanctuary for musical spirits. Here, collaboration thrives and notes are woven into tapestries of emotion. Sound engineers sculpt waves of</h1>
                </div>
                <div className='flex-1 px-3'>
                    <h1 data-aos='fade-right' data-aos-duration='2000' className='font-mono text-xl text-white'>Amid the city’s rhythm, our recording studio emerges as a sanctuary for musical spirits. Here, collaboration thrives and notes are woven into tapestries of emotion. Sound engineers sculpt waves of</h1>
                </div>
              </div>

              <button data-aos='fade-up' data-aos-duration='2000' className='text-white border border-white px-6 py-4 mt-20'>Read More</button>
          </div>

      </div>

    </div>

    <div className="relative h-auto w-full  bg-black py-16">
  <h1 className="text-3xl font-bold font-mono mb-4 text-yellow-500 text-center">Our Works</h1>
  <hr data-aos='fade-right' data-aos-duration='2000' className="bg-white w-40 h-1 mx-auto"></hr>
  <div className="flex justify-center">
    <div className="mx-auto my-10 grid max-w-screen-xl gap-y-8 gap-x-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
      <div data-aos='fade-right' data-aos-duration='2000' className="group cursor-pointer mx-4 overflow-hidden rounded-2xl bg-white shadow-xl duration-200 hover:-translate-y-4">
        <div className="flex h-60 flex-col justify-between overflow-hidden">
          <img src="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHZpZGVvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="group-hover:scale-110 h-full w-full object-cover duration-200" />
        </div>
        <div className="flex-1 overflow-hidden bg-white px-6 py-8">
          <h5 className="group-hover:text-indigo-600 mb-4 text-xl font-bold">Video 6: Learn more about marketing</h5>
          <p className="mb-8 text-gray-600">Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
          <div className="flex justify-between">
            <a href="#" className="group text-lg font-bold focus:text-indigo-600 hover:text-indigo-600">
              <span>▷</span>
              <span className="underline">Watch Now</span>
            </a>
            <div className="max-w-full flex-none lg:px-4">
              <h5 className="text-lg font-bold">Video 6</h5>
            </div>
          </div>
        </div>
      </div>
      <div data-aos='fade-down' data-aos-duration='2000' className="group cursor-pointer mx-4 overflow-hidden rounded-2xl bg-white shadow-xl duration-200 hover:-translate-y-4">
        <div className="flex h-60 flex-col justify-between overflow-hidden">
          <img src="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHZpZGVvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="group-hover:scale-110 h-full w-full object-cover duration-200" />
        </div>
        <div className="flex-1 overflow-hidden bg-white px-6 py-8">
          <h5 className="group-hover:text-indigo-600 mb-4 text-xl font-bold">Video 6: Learn more about marketing</h5>
          <p className="mb-8 text-gray-600">Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
          <div className="flex justify-between">
            <a href="#" className="group text-lg font-bold focus:text-indigo-600 hover:text-indigo-600">
              <span>▷</span>
              <span className="underline">Watch Now</span>
            </a>
            <div className="max-w-full flex-none lg:px-4">
              <h5 className="text-lg font-bold">Video 6</h5>
            </div>
          </div>
        </div>
      </div>
      <div data-aos='fade-left' data-aos-duration='2000' className="group cursor-pointer mx-4 overflow-hidden rounded-2xl bg-white shadow-xl duration-200 hover:-translate-y-4">
        <div className="flex h-60 flex-col justify-between overflow-hidden">
          <img src="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHZpZGVvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="group-hover:scale-110 h-full w-full object-cover duration-200" />
        </div>
        <div className="flex-1 overflow-hidden bg-white px-6 py-8">
          <h5 className="group-hover:text-indigo-600 mb-4 text-xl font-bold">Video 6: Learn more about marketing</h5>
          <p className="mb-8 text-gray-600">Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
          <div className="flex justify-between">
            <a href="#" className="group text-lg font-bold focus:text-indigo-600 hover:text-indigo-600">
              <span>▷</span>
              <span className="underline">Watch Now</span>
            </a>
            <div className="max-w-full flex-none lg:px-4">
              <h5 className="text-lg font-bold">Video 6</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<Review/>










    

    </div>
  );
};

export default Hero;
