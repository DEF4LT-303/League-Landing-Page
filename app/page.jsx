'use client';

import Card from '@/components/Card';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import 'react-vertical-timeline-component/style.min.css';

const champions = [
  {
    name: 'Miss Fortune',
    desc: 'Ruined Miss Fortune',
    img: 'https://staticg.sportskeeda.com/editor/2022/09/7da3d-16639417456299-1920.jpg'
  },
  {
    name: 'Ashe',
    desc: 'Fae Dragon Ashe',
    img: 'https://www.mobafire.com/images/champion/skins/landscape/ashe-fae-dragon-762x.jpg'
  },
  {
    name: 'Caitlyn',
    desc: 'Snow Moon Caitlyn',
    img: 'https://www.mobafire.com/images/champion/skins/landscape/caitlyn-snow-moon-762x.jpg'
  },
  {
    name: 'Xayah',
    desc: 'Broken Covenent Xayah',
    img: 'https://prod.api.assets.riotgames.com/public/v1/asset/lol/13.19.1/CHAMPION_SKIN/498037/ICON'
  }
];

const Home = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [selectedCardData, setSelectedCardData] = useState(null);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const hideSuccessAlert = () => {
    setSubmissionSuccess(false);
    setError(false);
  };

  const handleCardSelect = (index) => {
    if (selectedCardIndex === index) {
      setSelectedCardIndex(null);
    } else {
      setSelectedCardIndex(index);
      setSelectedCardData(champions[index]);
    }
  };

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      if (selectedCardData) {
        const res = await fetch('/api/champion', {
          method: 'POST',
          body: JSON.stringify(selectedCardData)
        });

        const data = await res.json();

        console.log(data);
        setSubmissionSuccess(true);
        setTimeout(hideSuccessAlert, 5000);
      } else {
        console.log('No card selected');
      }
    } catch (error) {
      console.log(error);
      setError(error);
      setTimeout(hideSuccessAlert, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <>
      <Header />
      <section className='w-full flex-center flex-col'>
        <h1 className='head_text text-center'>HAPPY BIRTHDAY!</h1>
        <br className='' />

        <span className='blue_gradient text-center'>To My Champion Sophia</span>

        <div className='flex flex-col w-full border-opacity-90'>
          <div className='divider w-3/4 mx-auto my-10'>
            <p className='text-center font-beaufort text-[#C89B3C]'>
              Select your champion
            </p>
          </div>
        </div>
      </section>

      <section className='w-full flex-center sm:flex-row flex-col gap-3 flex-wrap '>
        {champions.map((champion, index) => (
          <Card
            key={index}
            name={champion.name}
            desc={champion.desc}
            img={champion.img}
            isSelected={index === selectedCardIndex}
            onSelect={() => handleCardSelect(index)}
          />
        ))}
      </section>
      <button
        className='btn btn-info mt-10'
        onClick={handleSubmit}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Send Confirmation To Tato'}
      </button>
      {submissionSuccess && (
        <div className='alert alert-success  mt-5 w-2/4'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='stroke-current shrink-0 h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          <span>Tato will get you this champion now!</span>
        </div>
      )}

      {error && (
        <div className='alert alert-error  mt-5 w-2/4'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='stroke-current shrink-0 h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          <span>Error! Failed to send request.</span>
        </div>
      )}

      <section className='w-full  mt-10 mb-10'>
        {!isMobile ? (
          <>
            <h2 className='golden_gradient text-center'>Special Notes</h2>
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
                      <div className='order-1 bg-[#F0E6D2] rounded-lg shadow-xl w-5/12 px-6 py-4'>
                        <h3 className='mb-3 font-bold text-gray-800 text-xl font-spiegel'>
                          Some Adorable Things You Do
                        </h3>
                        <div className='text-sm leading-snug tracking-wide text-gray-800 text-opacity-100 font-spiegel'>
                          <ul
                            style={{
                              listStyleType: 'disc',
                              marginLeft: '20px'
                            }}
                          >
                            <li>
                              The way you say "You're welcome" when I say thank
                              you
                            </li>
                            <li>
                              The cute expression you make when I ask you to
                              play ranked xD
                            </li>
                            <li>
                              The way you say "Where are youuu" when we play 1v1
                            </li>
                            <li>The way you laugh all the time</li>
                            <li>
                              When you send cat nom and bugcat stickers randomly
                            </li>
                            <li>
                              The way you scream when you're chased by an enemy
                              in league xD
                            </li>
                            <li>When you say you wanna spend time with me</li>
                            <li>
                              When you surprise me with your pretty selfies
                            </li>
                            <li>When you accidentally open your camera</li>
                          </ul>
                          ... and many more
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
                            The way I wanna Hug You IRL
                          </h3>
                          <div className='sm:w-full flex justify-end'>
                            <img
                              src='/assets/images/image.png'
                              alt='hug'
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
                      <div className='order-1 bg-[#F0E6D2] rounded-lg shadow-xl w-5/12 px-6 py-4'>
                        <h3 className='mb-3 font-bold text-gray-800 text-xl font-spiegel'>
                          Things I Don't Like About You
                        </h3>

                        <p className='text-sm leading-snug tracking-wide text-[#f65757] text-opacity-100 font-spiegel'>
                          An Exception Error Has Occured: <br />
                          Cannot dislike anything about a person who is so
                          perfect_
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
                          Final Words
                        </h3>
                        <p className='text-sm font-medium leading-snug tracking-wide text-gray-800 text-opacity-100 font-spiegel'>
                          Happy Birthday to you Sophia. I hope you like my
                          present :3. Thank you so much for staying by my side
                          all this time and caring for me so much. Thank you for
                          always cheering me up whenever I was low. I love you a
                          lot 💖
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
                    Some Adorable Things You Do
                  </h3>
                  <div className='text-sm leading-snug tracking-wide text-white text-opacity-100 font-spiegel'>
                    <ul
                      style={{
                        listStyleType: 'disc',
                        marginLeft: '20px'
                      }}
                    >
                      <li>
                        The way you say "You're welcome" when I say thank you
                      </li>
                      <li>
                        The cute expression you make when I ask you to play
                        ranked xD
                      </li>
                      <li>
                        The way you say "Where are youuu" when we play 1v1
                      </li>
                      <li>The way you laugh all the time</li>
                      <li>
                        When you send cat nom and bugcat stickers randomly
                      </li>
                      <li>
                        The way you scream when you're chased by an enemy in
                        league xD
                      </li>
                      <li>When you say you wanna spend time with me</li>
                      <li>When you surprise me with your pretty selfies</li>
                    </ul>
                    ... and many more
                  </div>
                </div>
              </Fade>

              <Fade left>
                <div className='order-1 bg-[#F0E6D2] rounded-lg shadow-xl w-4/5 px-6 py-4 my-4'>
                  <div className='flex flex-row gap-2 items-center'>
                    <h3 className=' font-bold text-gray-800 text-xl font-spiegel'>
                      The way I wanna Hug You IRL
                    </h3>
                    <div className='sm:w-full flex justify-end'>
                      <img
                        src='/assets/images/image.png'
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
                    Things I Don't Like About You
                  </h3>

                  <p className='text-sm leading-snug tracking-wide text-[#f65757] text-opacity-100 font-spiegel'>
                    An Exception Error Has Occured: <br />
                    Cannot dislike anything about a person who is so perfect_
                  </p>
                </div>
              </Fade>

              <Fade left>
                <div className='order-1 bg-[#F0E6D2] rounded-lg shadow-xl w-4/5 px-6 py-4 my-4'>
                  <h3 className='mb-3 font-bold text-gray-800 text-xl font-spiegel'>
                    Final Words
                  </h3>
                  <p className='text-sm font-medium leading-snug tracking-wide text-gray-800 text-opacity-100 font-spiegel'>
                    Happy Birthday to you Sophia. I hope you like my present :3.
                    Thank you so much for staying by my side all this time and
                    caring for me so much. Thank you for always cheering me up
                    whenever I was low. I love you a lot 💖
                  </p>
                </div>
              </Fade>
            </div>
          </>
        )}
      </section>
      <Footer />
    </>
  );
};

export default Home;
