'use client';

const Card = ({ name, desc, img, onSelect, isSelected }) => {
  return (
    <div className='card  w-96 h-auto  shadow-xl mt-5 bg-gradient-to-r from-[#1E282D] to-[#010A13]'>
      <figure>
        <img src={img} alt={name} className='h-80 w-full object-cover' />
      </figure>
      <div className='card-body '>
        <h2 className='card-title '>{name}</h2>
        <p>{desc}</p>
        <div className='card-actions mt-5 justify-end'>
          <button
            className={`btn ${isSelected ? 'btn-success' : 'btn-primary'}`}
            onClick={onSelect}
          >
            {isSelected ? 'This is Mine' : 'I want this!'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
