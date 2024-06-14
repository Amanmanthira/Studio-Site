import React, { useEffect } from 'react';

const Review = () => {
  useEffect(() => {
    const loadKeenSlider = async () => {
      const { default: KeenSlider } = await import('https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/+esm');
      
      const keenSlider = new KeenSlider(
        '#keen-slider',
        {
          loop: true,
          slides: {
            origin: 'center',
            perView: 1.25,
            spacing: 16,
          },
          breakpoints: {
            '(min-width: 1024px)': {
              slides: {
                origin: 'auto',
                perView: 2.5,
                spacing: 32,
              },
            },
          },
        },
        []
      );

      const keenSliderPrevious = document.getElementById('keen-slider-previous');
      const keenSliderNext = document.getElementById('keen-slider-next');

      keenSliderPrevious.addEventListener('click', () => keenSlider.prev());
      keenSliderNext.addEventListener('click', () => keenSlider.next());
    };

    loadKeenSlider();
  }, []);

  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/keen-slider.min.css" rel="stylesheet" />

      <section className="bg-gray-900">
        <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
          <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
            <h2 className="max-w-xl text-4xl font-bold tracking-tight font-mono text-white sm:text-5xl">
              Read trusted reviews from Celebrities & our customers
            </h2>
            <div className="mt-8 flex gap-4 lg:mt-0">
              <button
                aria-label="Previous slide"
                id="keen-slider-previous"
                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 rtl:rotate-180"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              <button
                aria-label="Next slide"
                id="keen-slider-next"
                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
              >
                <svg
                  className="size-5 rtl:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
            <div id="keen-slider" className="keen-slider">
              <div className="keen-slider__slide">
                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
                    <div className="flex gap-0.5 text-green-500">
                      {/* Stars SVG */}
                    </div>
                    <div className="mt-4">
                      <p className="text-2xl font-bold  text-rose-600 sm:text-3xl">Stayin' Alive</p>
                      <p className="mt-4 leading-relaxed text-gray-700 font-mono">
                        No, Rose, they are not breathing. And they have no arms or legs … Where are they?
                        You know what? If we come across somebody with no arms or legs, do we bother
                        resuscitating them? I mean, what quality of life do we have there?
                      </p>
                    </div>
                  </div>
                  <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                    &mdash; Michael Scott
                  </footer>
                </blockquote>
              </div>
              {/* Additional slides here */}
              <div className="keen-slider__slide">
                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
                    <div className="flex gap-0.5 text-green-500">
                      {/* Stars SVG */}
                    </div>
                    <div className="mt-4">
                      <p className="text-2xl font-bold text-rose-600 sm:text-3xl">Stayin' Alive</p>
                      <p className="mt-4 leading-relaxed text-gray-700 font-mono">
                        No, Rose, they are not breathing. And they have no arms or legs … Where are they?
                        You know what? If we come across somebody with no arms or legs, do we bother
                        resuscitating them? I mean, what quality of life do we have there?
                      </p>
                    </div>
                  </div>
                  <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                    &mdash; Michael Scott
                  </footer>
                </blockquote>
              </div>
              <div className="keen-slider__slide">
                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
                    <div className="flex gap-0.5 text-green-500">
                      {/* Stars SVG */}
                    </div>
                    <div className="mt-4">
                      <p className="text-2xl font-bold text-rose-600 sm:text-3xl">Stayin' Alive</p>
                      <p className="mt-4 leading-relaxed text-gray-700 font-mono">
                        No, Rose, they are not breathing. And they have no arms or legs … Where are they?
                        You know what? If we come across somebody with no arms or legs, do we bother
                        resuscitating them? I mean, what quality of life do we have there?
                      </p>
                    </div>
                  </div>
                  <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                    &mdash; Michael Scott
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
