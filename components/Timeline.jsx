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
                      YORICK, THE SHEPHERD OF SOULS
                      </h3>
                      <div className='text-sm leading-snug tracking-wide text-white text-opacity-100 font-spiegel'>
                      The last survivor of a long-forgotten religious order, 
                      Yorick is both blessed and cursed with power over the dead. 
                      Trapped on the Shadow Isles, his only companions are the rotting 
                      corpses and shrieking spirits that he gathers to him. Yorick’s monstrous 
                      actions belie his noble purpose: to free his home from the curse of the 
                      Ruination.
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
                        Arcane: League of Legends
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
                        Senna, The Black Mist
                      </h3>

                      <p className='text-sm leading-snug tracking-wide text-white text-opacity-100 font-spiegel'>
                      Cursed from childhood to be haunted by the supernatural Black Mist, Senna joined a sacred order
                      known as the Sentinels of Light Crest icon Sentinels of Light, and fiercely fought back—only to be killed: 
                      her soul imprisoned in a lantern by the cruel wraith Thresh Thresh. But refusing to lose hope, within the 
                      lantern Senna learned to use the Mist, and reemerged to new life, forever changed. Now wielding darkness 
                      along with light, Senna seeks to end the Black Mist by turning it against itself—with every blast of her relic 
                      weapon, redeeming the souls lost within.
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
                      Jhin, The Psychopath
                      </h3>
                      <p className='text-sm font-medium leading-snug tracking-wide text-gray-800 text-opacity-100 font-spiegel'>
                      Jhin is a meticulous criminal psychopath who believes murder is art. Once an Ionian prisoner, but freed by shadowy 
                      elements within Ionia’s ruling council, the serial killer now works as their cabal's assassin. Using his gun as his 
                      paintbrush, Jhin creates works of artistic brutality, horrifying victims and onlookers. He gains a cruel pleasure from 
                      putting on his gruesome theater, making him the ideal choice to send the most powerful of messages: terror.
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
                YORICK, THE SHEPHERD OF SOULS
                </h3>
                <div className='text-sm leading-snug tracking-wide text-white text-opacity-100 font-spiegel'>
                The last survivor of a long-forgotten religious order, 
                      Yorick is both blessed and cursed with power over the dead. 
                      Trapped on the Shadow Isles, his only companions are the rotting 
                      corpses and shrieking spirits that he gathers to him. Yorick’s monstrous 
                      actions belie his noble purpose: to free his home from the curse of the 
                      Ruination.
                </div>
              </div>
            </Fade>

            <Fade left>
              <div className='order-1 bg-[#F0E6D2] rounded-lg shadow-xl w-4/5 px-6 py-4 my-4'>
                <div className='flex flex-row gap-2 items-center'>
                  <h3 className=' font-bold text-gray-800 text-xl font-spiegel'>
                  Arcane: League of Legends
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
                  Senna, The Black Mist
                </h3>

                <p className='text-sm leading-snug tracking-wide text-white text-opacity-100 font-spiegel'>
                Cursed from childhood to be haunted by the supernatural Black Mist, Senna joined a sacred order
                known as the Sentinels of Light Crest icon Sentinels of Light, and fiercely fought back—only to be killed:                   her soul imprisoned in a lantern by the cruel wraith Thresh Thresh. But refusing to lose hope, within the 
                lantern Senna learned to use the Mist, and reemerged to new life, forever changed. Now wielding darkness 
                along with light, Senna seeks to end the Black Mist by turning it against itself—with every blast of her relic 
                weapon, redeeming the souls lost within.
                </p>
              </div>
            </Fade>

            <Fade left>
              <div className='order-1 bg-[#F0E6D2] rounded-lg shadow-xl w-4/5 px-6 py-4 my-4'>
                <h3 className='mb-3 font-bold text-gray-800 text-xl font-spiegel'>
                  Jhin, The Psychopath
                </h3>
                <p className='text-sm font-medium leading-snug tracking-wide text-gray-800 text-opacity-100 font-spiegel'>
                Jhin is a meticulous criminal psychopath who believes murder is art. Once an Ionian prisoner, but freed by shadowy 
                elements within Ionia’s ruling council, the serial killer now works as their cabal's assassin. Using his gun as his 
                paintbrush, Jhin creates works of artistic brutality, horrifying victims and onlookers. He gains a cruel pleasure from 
                putting on his gruesome theater, making him the ideal choice to send the most powerful of messages: terror.
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
