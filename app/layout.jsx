import '@/styles/global.css';

export const metadata = {
  title: 'Happy Birthday!',
  description: 'Happy Birthday'
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div className=''>
          <div className='gradient' />
        </div>

        <main className='app'>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
