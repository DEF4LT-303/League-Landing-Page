'use client';

import Card from '@/components/Card';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Timeline from '@/components/Timeline';
import { useState } from 'react';
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
  const [disabled, setDisabled] = useState(true);

  const hideSuccessAlert = () => {
    setSubmissionSuccess(false);
    setError(false);
  };

  const handleCardSelect = (index) => {
    if (selectedCardIndex === index) {
      setSelectedCardIndex(null);
      setDisabled(true);
    } else {
      setSelectedCardIndex(index);
      setSelectedCardData(champions[index]);
      setDisabled(false);
    }
  };

  console.log(disabled);

  const handleSubmit = async () => {
    try {
      setSelectedCardIndex(null);
      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (selectedCardData) {
        //   const res = await fetch('/api/champion', {
        //     method: 'POST',
        //     body: JSON.stringify(selectedCardData)
        //   });

        //   const data = await res.json();

        //   console.log(data);
        setSubmissionSuccess(true);
        setTimeout(hideSuccessAlert, 5000);
      } else {
        setSelectedCardIndex(null);
        console.log('No card selected');
      }
    } catch (error) {
      console.log(error);
      setError(error);
      setTimeout(hideSuccessAlert, 3000);
      setSelectedCardIndex(null);
    } finally {
      setSelectedCardIndex(null);
      setIsSubmitting(false);
      setDisabled(true);
    }
  };

  return (
    <>
      <Header />
      <section className='w-full flex-center flex-col'>
        <h1 className='head_text text-center'>WELCOME TO</h1>
        <br className='' />

        <span className='blue_gradient text-center'>
          Champion Skin Selection
        </span>

        <div className='flex flex-col w-full border-opacity-90'>
          <div className='divider w-3/4 mx-auto my-10'>
            <p className='text-center font-beaufort text-[#C89B3C]'>
              Select your champion skin
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
        disabled={isSubmitting || disabled}
      >
        {isSubmitting ? 'Submitting...' : 'Send Confirmation'}
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
          <span>Order has been placed!</span>
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
      <div className='divider w-3/4 mx-auto my-10'></div>
      <Timeline />
      <Footer />
    </>
  );
};

export default Home;
