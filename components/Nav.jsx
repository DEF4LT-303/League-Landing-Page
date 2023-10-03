'use client';

import { useState } from 'react';

const Nav = ({ onThemeChange }) => {
  const [theme, setTheme] = useState('dark');

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    onThemeChange(newTheme);
  };

  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <a className='btn btn-ghost normal-case text-xl'>Lorem</a>
      </div>
      <div className='flex-none z-30'>
        <ul className='menu menu-horizontal px-1'>
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
  );
};

export default Nav;
