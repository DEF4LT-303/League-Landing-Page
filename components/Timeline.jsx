'use client';

import { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';

const Timeline = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWindowWidth = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the threshold as needed
    };

    // Add an event listener to check window width when it's resized
    window.addEventListener('resize', checkWindowWidth);

    // Initial check
    checkWindowWidth();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', checkWindowWidth);
    };
  }, []);

  return (
    <section className='w-full mb-10'>
      <h2 className='golden_gradient text-center mb-5'>Timeline</h2>
      {!isMobile ? (
        <>
          <div className=''>
            <div className='relative wrap overflow-hidden p-10 h-full'>
              <div className='border-2-2 absolute border-opacity-20 border-[#C8AA6E] h-full border left-2/4'></div>

              <div className='flex flex-col'>
                <div className='mb-8 flex justify-between items-center w-full right-timeline'>
                  <div className='order-1 w-5/12'></div>
                  <div className='z-20 flex items-center order-1 bg-[#C8AA6E] shadow-xl w-8 h-8 rounded-full'>
                    <h1 className='mx-auto font-semibold text-lg text-white'>
                      1
                    </h1>
                  </div>
                  <Fade right>
                    <div className='order-1 bg-[#091428] rounded-lg shadow-xl w-5/12 px-6 py-4'>
                      <h3 className='mb-3 font-bold text-white text-xl font-spiegel'>
                        Lorem Ipsum
                      </h3>
                      <div className='text-sm leading-snug tracking-wide text-white text-opacity-100 font-spiegel'>
                        Qui nulla aliquip ullamco dolore cillum laborum aliquip
                        Lorem aliquip mollit proident. Labore consectetur duis
                        proident non in proident. In culpa quis non sit esse
                        cupidatat est. In consequat id occaecat nisi esse
                        consectetur nostrud in labore tempor proident
                        reprehenderit cupidatat commodo. Culpa tempor eu laborum
                        magna eiusmod minim exercitation dolore in aliquip
                        ullamco eu. Eu excepteur exercitation Lorem commodo
                        culpa. Cillum amet pariatur mollit consequat Lorem Lorem
                        sint ex est deserunt do.
                      </div>
                    </div>
                  </Fade>
                </div>

                <div className='mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline'>
                  <div className='order-1 w-5/12'></div>
                  <div className='z-20 flex items-center order-1 bg-[#C8AA6E] shadow-xl w-8 h-8 rounded-full'>
                    <h1 className='mx-auto text-white font-semibold text-lg'>
                      2
                    </h1>
                  </div>
                  <Fade left>
                    <div className='order-1 bg-[#F0E6D2] rounded-lg shadow-xl w-5/12 px-6 py-4'>
                      <div className='flex flex-row gap-2 items-center'>
                        <h3 className=' font-bold text-gray-800 text-xl font-spiegel'>
                          Lorem Ipsum Dolor Sit Amet
                        </h3>
                        <div className='sm:w-full flex justify-end'>
                          <img
                            src='https://cdn.oneesports.gg/cdn-data/2021/11/LeagueofLegends_ArcanePosterWallpaper-450x253.jpg'
                            alt='lorem'
                            className='rounded-lg shadow-xl overflow-hidden'
                            height={300}
                            width={300}
                          />
                        </div>
                      </div>
                    </div>
                  </Fade>
                </div>

                <div className='mb-8 flex justify-between items-center w-full right-timeline'>
                  <div className='order-1 w-5/12'></div>
                  <div className='z-20 flex items-center order-1 bg-[#C8AA6E] shadow-xl w-8 h-8 rounded-full'>
                    <h1 className='mx-auto font-semibold text-lg text-white'>
                      3
                    </h1>
                  </div>
                  <Fade right>
                    <div className='order-1 bg-[#091428] rounded-lg shadow-xl w-5/12 px-6 py-4'>
                      <h3 className='mb-3 font-bold text-white text-xl font-spiegel'>
                        Lorem Ipsum Dolor Sit Amet Nulla
                      </h3>

                      <p className='text-sm leading-snug tracking-wide text-white text-opacity-100 font-spiegel'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam.
                      </p>
                    </div>
                  </Fade>
                </div>

                <div className='mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline'>
                  <div className='order-1 w-5/12'></div>
                  <div className='z-20 flex items-center order-1 bg-[#C8AA6E] shadow-xl w-8 h-8 rounded-full'>
                    <h1 className='mx-auto text-white font-semibold text-lg'>
                      4
                    </h1>
                  </div>
                  <Fade left>
                    <div className='order-1 bg-[#F0E6D2] rounded-lg shadow-xl w-5/12 px-6 py-4'>
                      <h3 className='mb-3 font-bold text-gray-800 text-xl font-spiegel'>
                        lorem Ipsum
                      </h3>
                      <p className='text-sm font-medium leading-snug tracking-wide text-gray-800 text-opacity-100 font-spiegel'>
                        Amet cupidatat esse exercitation ex. Fugiat cupidatat
                        cupidatat amet mollit proident non qui in et ipsum.
                        Nulla minim excepteur et ullamco nostrud aliquip veniam
                        consequat reprehenderit officia ea. Est cillum cupidatat
                        pariatur cupidatat velit eiusmod aute reprehenderit anim
                        do proident velit enim. Veniam minim dolore sit sunt
                        deserunt mollit qui elit ut labore id non et nulla.
                        Nulla minim aliquip cupidatat tempor ea esse occaecat
                        laborum ullamco duis culpa sunt minim consequat.
                        Deserunt aute cillum exercitation qui est voluptate amet
                        enim velit consequat adipisicing laborum ad. Laborum est
                        officia ut dolor sint quis magna. Mollit excepteur
                        proident officia non aliquip minim Lorem tempor
                        cupidatat. Adipisicing magna aute dolore non aliquip
                        adipisicing pariatur dolore cupidatat. Eiusmod cillum
                        culpa mollit et. Veniam velit in deserunt cillum
                        incididunt aliqua officia labore fugiat exercitation
                        nisi aliqua minim do. Eu esse anim do nulla ex nisi elit
                        do dolor. Culpa minim ea nulla ea excepteur irure Lorem.
                        Duis amet elit sit aliquip anim. Tempor laborum ad
                        cupidatat nisi ut consectetur do deserunt do proident
                        anim.
                      </p>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='flex flex-col items-center justify-center'>
            <Fade right>
              <div className='order-1 bg-[#091428] rounded-lg shadow-xl px-6 py-4 w-4/5 my-4'>
                <h3 className='mb-3 font-bold text-white text-xl font-spiegel'>
                  Lorem Ipsum
                </h3>
                <div className='text-sm leading-snug tracking-wide text-white text-opacity-100 font-spiegel'>
                  Qui nulla aliquip ullamco dolore cillum laborum aliquip Lorem
                  aliquip mollit proident. Labore consectetur duis proident non
                  in proident. In culpa quis non sit esse cupidatat est. In
                  consequat id occaecat nisi esse consectetur nostrud in labore
                  tempor proident reprehenderit cupidatat commodo. Culpa tempor
                  eu laborum magna eiusmod minim exercitation dolore in aliquip
                  ullamco eu. Eu excepteur exercitation Lorem commodo culpa.
                  Cillum amet pariatur mollit consequat Lorem Lorem sint ex est
                  deserunt do.
                </div>
              </div>
            </Fade>

            <Fade left>
              <div className='order-1 bg-[#F0E6D2] rounded-lg shadow-xl w-4/5 px-6 py-4 my-4'>
                <div className='flex flex-row gap-2 items-center'>
                  <h3 className=' font-bold text-gray-800 text-xl font-spiegel'>
                    Lorem Ipsum Dolor Sit Amet
                  </h3>
                  <div className='sm:w-full flex justify-end'>
                    <img
                      src='https://cdn.oneesports.gg/cdn-data/2021/11/LeagueofLegends_ArcanePosterWallpaper-450x253.jpg'
                      alt='hug'
                      className='rounded-lg shadow-xl overflow-hidden'
                      height={300}
                      width={300}
                    />
                  </div>
                </div>
              </div>
            </Fade>

            <Fade right>
              <div className='order-1 bg-[#091428] rounded-lg shadow-xl w-4/5 px-6 py-4 my-4'>
                <h3 className='mb-3 font-bold text-white text-xl font-spiegel'>
                  Lorem Ipsum Dolor Sit Amet Nulla
                </h3>

                <p className='text-sm leading-snug tracking-wide text-white text-opacity-100 font-spiegel'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </Fade>

            <Fade left>
              <div className='order-1 bg-[#F0E6D2] rounded-lg shadow-xl w-4/5 px-6 py-4 my-4'>
                <h3 className='mb-3 font-bold text-gray-800 text-xl font-spiegel'>
                  lorem Ipsum
                </h3>
                <p className='text-sm font-medium leading-snug tracking-wide text-gray-800 text-opacity-100 font-spiegel'>
                  Amet cupidatat esse exercitation ex. Fugiat cupidatat
                  cupidatat amet mollit proident non qui in et ipsum. Nulla
                  minim excepteur et ullamco nostrud aliquip veniam consequat
                  reprehenderit officia ea. Est cillum cupidatat pariatur
                  cupidatat velit eiusmod aute reprehenderit anim do proident
                  velit enim. Veniam minim dolore sit sunt deserunt mollit qui
                  elit ut labore id non et nulla. Nulla minim aliquip cupidatat
                  tempor ea esse occaecat laborum ullamco duis culpa sunt minim
                  consequat. Deserunt aute cillum exercitation qui est voluptate
                  amet enim velit consequat adipisicing laborum ad. Laborum est
                  officia ut dolor sint quis magna. Mollit excepteur proident
                  officia non aliquip minim Lorem tempor cupidatat. Adipisicing
                  magna aute dolore non aliquip adipisicing pariatur dolore
                  cupidatat. Eiusmod cillum culpa mollit et. Veniam velit in
                  deserunt cillum incididunt aliqua officia labore fugiat
                  exercitation nisi aliqua minim do. Eu esse anim do nulla ex
                  nisi elit do dolor. Culpa minim ea nulla ea excepteur irure
                  Lorem. Duis amet elit sit aliquip anim. Tempor laborum ad
                  cupidatat nisi ut consectetur do deserunt do proident anim.
                </p>
              </div>
            </Fade>
          </div>
        </>
      )}
    </section>
  );
};

export default Timeline;
