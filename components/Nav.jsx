'use client';

import { useState } from 'react';

const Nav = ({ onThemeChange }) => {
  const [theme, setTheme] = useState('dark');

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    onThemeChange(newTheme);
  };

  return (
  <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar bg-base-300 flex justify-between">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
     
     <div className='m-2 gap-2'>
      <img
          src='lol.svg'
          alt='Logo'
          className='md:h-10 md:w-10 h-7 w-7'
          />   
      <div className="font-beaufort">League Of Legends</div>
      </div>
      
      <div className="flex-none hidden lg:block font-spiegel">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
          <li><a>Navbar Item 1</a></li>
          <li><a>Navbar Item 2</a></li>
          <li>
            <details>
              <summary>Theme</summary>
              <ul className='p-1 bg-base-100'>
                <li>
                  <a onClick={() => handleThemeChange('dark')}>Dark</a>
                </li>
                <li>
                  <a onClick={() => handleThemeChange('cupcake')}>Light</a>
                </li>
                <li>
                  <a onClick={() => handleThemeChange('dracula')}>Dracula</a>
                </li>
                <li>
                  <a onClick={() => handleThemeChange('synthwave')}>Synth</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
    {/* Page content here */}
  </div> 
  <div className="drawer-side z-50 font-spiegel">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      <li>
            <details>
              <summary>Theme</summary>
              <ul className='bg-base-100'>
                <li>
                  <a onClick={() => handleThemeChange('dark')}>Dark</a>
                </li>
                <li>
                  <a onClick={() => handleThemeChange('cupcake')}>Light</a>
                </li>
                <li>
                  <a onClick={() => handleThemeChange('dracula')}>Dracula</a>
                </li>
                <li>
                  <a onClick={() => handleThemeChange('synthwave')}>Synth</a>
                </li>
              </ul>
            </details>
          </li>
    </ul>
  </div>
</div>


    // <div className='navbar bg-base-100'>
    //   <div className='flex-1'>
    //     <a className='btn btn-ghost normal-case text-xl'>League Of Legends</a>
    //   </div>
    //   <div className='flex-none z-30'>
    //     <ul className='menu menu-horizontal px-1'>
    //       <li>
    //         <details>
    //           <summary>Theme</summary>
    //           <ul className='p-1 bg-base-100'>
    //             <li>
    //               <a onClick={() => handleThemeChange('dark')}>Dark</a>
    //             </li>
    //             <li>
    //               <a onClick={() => handleThemeChange('cupcake')}>Light</a>
    //             </li>
    //             <li>
    //               <a onClick={() => handleThemeChange('dracula')}>Dracula</a>
    //             </li>
    //             <li>
    //               <a onClick={() => handleThemeChange('synthwave')}>Synth</a>
    //             </li>
    //           </ul>
    //         </details>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
};

export default Nav;
