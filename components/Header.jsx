const header = () => {
  return (
    <div
      className='hero max-h-screen'
      style={{
        backgroundImage:
          'url(https://www.xtrafondos.com/en/descargar.php?id=10066&resolucion=1920x1080)',
        boxShadow: '0 0 10px rgba(0, 0, 0, 1)'
      }}
    >
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='justify-center items-center flex flex-col'>
        <img
          src='lol.svg'
          alt='Logo'
          className='absolute top-4 left-4 h-12 w-12'
        />
      </div>
      <div className='hero-content text-center text-[#F0E6D2]'>
        <div className='max-w-lg'>
          <h1 className='mb-5 text-5xl font-bold font-beaufort'>
            Surprise Surprise!
          </h1>
          <p className='mb-5 font-spiegel'>
            Your long awaited birthday has arrived! I wanted to make something
            special for you. But the real surprise awaits ;3
          </p>
          <button className='btn btn-primary'>BooP</button>
        </div>
      </div>
    </div>
  );
};

export default header;
