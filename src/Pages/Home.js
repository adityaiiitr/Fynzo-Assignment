import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/form');
  };
  return (
    <>
    <div className='h-screen flex items-center justify-center mt-24 h-1/2'>
    <button className='bg-opacity-60 text-white bg-gray-600 hover:bg-black focus:ring-gray-800 dark:focus:ring-white-200 font-medium rounded-lg text-sm  h-60 w-60' onClick={handleClick}>Click Here</button>
    </div>
    </>
      
      

    
  )
}

export default Home