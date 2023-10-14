import Link from 'next/link'

const Card = ({ name, desc, img, onSelect, isSelected }) => {
  return (
    <div className='card w-96 h-auto shadow-xl mt-5 mx-2  bg-[#1E282D]'>
      <figure>
        <img src={img} alt={name} className='h-80 w-full object-cover' />
      </figure>
      <div className='card-body '>
        <h2 className='card-title text-white font-beaufort'>{name}</h2>
        <p className='text-white font-Spiegel'>{desc}</p>
        <div className='card-actions mt-5 justify-end'>
        <Link href='/champion'>
          <button className="btn btn-info">Read</button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
