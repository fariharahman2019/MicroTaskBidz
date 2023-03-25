import React, { useState } from 'react';
import { data } from '../../data/data.js';

const Portfolio = () => {
  const [tasks, setTasks] = useState(data);


  const filter = (price) => {
    setTasks(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12 ' id='portfolio'>
      <h1 className='text-teal-900 font-bold text-4xl text-center m-8'>Pending Tasks </h1>
      <div className='flex flex-col lg:flex-row justify-between'>
        <div>
          <p className='text-start text-xl font-bold text-gray-700 ml-12 mb-2'>Tasks Pricings</p>
          <div className='flex  w-full ml-10'>
            <button
              onClick={() => filter('$')}
              className='m-1 p-2 bg-teal-700 border rounded h-10 text-sm border-cyan-600 text-white hover:bg-gray-800
               hover:text-white'
            >Less than 10$
            </button>
            <button
              onClick={() => filter('$$')}
              className='m-1 p-2 bg-teal-700 border rounded h-10 text-sm border-cyan-600 text-white hover:bg-gray-800
              hover:text-white'
            > Less than 50$$
            </button>
            <button
              onClick={() => filter('$$$')}
              className='m-1 p-2 bg-teal-700 border rounded h-10 text-sm border-cyan-600 text-white hover:bg-gray-800
              hover:text-white'
            > Less than 100$$$
            </button>
            <button
              onClick={() => filter('$$$$')}
              className='m-1 p-2 bg-teal-700 border rounded h-10 text-sm border-cyan-600 text-white hover:bg-gray-800
              hover:text-white'
            >
              Less than 200$$$$
            </button>
          </div>
        </div>
      </div>


      <div className='m-10 grid grid-cols-2 lg:grid-cols-2 gap-20 pt-6'>
        {
        tasks.map((item, index) => (
          <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-400'>
            <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg' />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p> <span className='bg-teal-700 text-white p-1 rounded-full'>{item.price} </span> </p>
            </div>
          </div>
        ))
        }
      </div>
    </div>
  );
};

export default Portfolio;
