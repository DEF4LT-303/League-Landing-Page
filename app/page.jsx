'use client';

import Card from '@/components/Card';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Timeline from '@/components/Timeline';
import Link from 'next/link'
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
  // {
  //   name: 'Xayah',
  //   desc: 'Broken Covenent Xayah',
  //   img: 'https://prod.api.assets.riotgames.com/public/v1/asset/lol/13.19.1/CHAMPION_SKIN/498037/ICON'
  // }
];

const Home = () => {

  const handleClick = () => {

  }

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
            onSelect={() => handleClick()}
          />
        ))}
      </section>
  
      <div className='divider w-3/4 mx-auto my-10'></div>
      <Timeline />
      <Footer />
    </>
  );
};

export default Home;
