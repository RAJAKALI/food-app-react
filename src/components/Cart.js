import React from 'react'
import ListItemCards from './ListItemCards'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { clearItems } from '../utils/cartSlice'

const Cart = () => {
const data=useSelector((store)=>store.cart.items);
const dispatch=useDispatch();
  return (
    <>
    <div className='mt-20 flex justify-center items-center mb-2'>
    <h1 className='text-center font-bold mx-auto'>Cart items</h1>
    <button className='bg-violet-500 text-white px-2 rounded-sm ml-0 mr-44' onClick={()=>{
        dispatch(clearItems());
    }}>Clear</button>
    </div>
   <div className=' w-9/12 m-auto bg-slate-50'>  
    {
      data.length===0?<h1 className='p-5'>Cart is empty please add items</h1>:data.map((item)=>{
       return <ListItemCards key={item?.id} cart={true} {...item}/>
    })}
    </div>
    </>
  );
}

export default Cart;