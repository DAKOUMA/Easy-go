import React from 'react'
import { motion } from 'framer-motion';
import { useState } from 'react';

const ProductCard = ({ brand, price, count }) => {
  const [hover, setHover] = useState(false)
  return (
    <div
      className='flex flex-col relative w-[150px] px-2 py-1 rounded-md border shadow-md m-auto hover:shadow-red-300 transition-all'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className='text-sm flex flex-col gap-1'>
        <span className='font-semibold'>{brand}</span>
        <span>Total: {price + "$"}</span>

      </div>
      <div className='absolute top-1 right-1 bottom-1 flex flex-col justify-around'>
        {count + "."}
      </div>
      <motion.div
        className='absolute -top-4 -right-6 h-[30px] w-[100px] rounded-sm border bg-white flex items-center justify-center'
        initial={hover ? { scale: 0 } : { scale: 1 }}
        animate={hover ? { scale: 1 } : { scale: 0 }}
      >
        <span className=''>Price: {(price / count).toFixed(0)}$</span>
      </motion.div>
    </div>
  )
}

export default ProductCard