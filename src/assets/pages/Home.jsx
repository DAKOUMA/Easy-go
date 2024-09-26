import React, { useEffect, useRef, useState } from 'react'
import Datepicker from 'react-tailwindcss-datepicker'

const Home = ({ date, setDate, dateSaved, sale, setSale }) => {

  const options = {
    month: 'short',
    year: 'numeric',
    day: 'numeric',
  };

  const MIN_DATE = new Date(2024, 8, 22);
  const MAX_DATE = new Date(2024, 8, 29);

  const dateNow = new Date(dateSaved)
  
  console.log(dateNow);
  

  return (
    <main>
      <article>
        <div className='flex items-center gap-10 sm:justify-normal md:flex-col md:items-start md:gap-3'>
          <h1 className='text-black text-2xl font-medium md:text-4xl'>Account Area</h1>
          <div>
            <Datepicker
              toggleClassName="absolute focus bg-[#FAF9F6] h-full rounded-r-lg text-black right-0  px-3  focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed border"
              inputClassName="bg-transparent focus:outline-none h-full border rounded-lg w-[150px] p-1"
              placeholder="Choose Date"
              classNames={`bg-black`}
              showFooter={true}
              useRange={false}
              asSingle={true}
              value={date}
              minDate={MIN_DATE}
              maxDate={MAX_DATE}
              readOnly={true}
              onChange={newValue => setDate(newValue)}
            />
          </div>
        </div>
      </article>
      
    </main>
  )
}

export default Home