'use client';

import Nav from '@/components/Nav';
import '@/styles/global.css';
import { useState } from 'react';

// export const metadata = {
//   title: 'Happy Birthday!',
//   description: 'Happy Birthday'
// };

const RootLayout = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <html lang='en' data-theme={theme}>
      <body>
        <Nav onThemeChange={handleThemeChange} />
        <div className=''>
          <div className='gradient' />
        </div>
        <main className='app'>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
