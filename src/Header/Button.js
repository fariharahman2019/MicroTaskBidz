import React from 'react';

const Button = (props) => {
  return (
    <button className='ml-1 bg-gray-900 text-yellow-500 py-2 px-6 rounded md:ml-8 hover:bg-gray-700 duration-500'>
      {props.children}
    </button>
  )
}

export default Button
