import React from 'react'
import { IMG_CDN_URL } from '../utils/constants';
const ListItemCards = ({
    name,
    description,
    imageId,
    defaultPrice,
    price
}) => {
  return (
    <div className=' border-gray-300 border-b-[1px] flex justify-between p-3'>
        <div className='w-9/12'>
        <h4 className=' font-semibold'>{name} - ₹{price?price/100:defaultPrice/100}</h4>
        <span>{description}</span>
        </div>
        <div className='w-3/12'>
        <button className='absolute bg-black text-white mx-10 my-16 rounded-md px-1'>Add+</button>
        <img className='w-32 h-20 rounded-md' src={IMG_CDN_URL+imageId}></img>
        </div>
    </div>
  );
}

export default ListItemCards