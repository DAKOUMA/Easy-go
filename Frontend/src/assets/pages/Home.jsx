import React from 'react'
import { homeArrow } from '../../store/data.jsx';
import HomeArrow from '../components/static/Navigation/HomeArrow.jsx';

import DateComponent from '../components/static/Navigation/DateComponent.jsx'
import CircleState from '../components/statistique/CircleState.jsx';
import { MdArrowOutward } from 'react-icons/md';
import BarState from '../components/statistique/BarState.jsx';
import LineState from '../components/statistique/LineState.jsx';
import { thumbnail } from '../index.jsx';

const Home = ({ dateSaved }) => {


  const TitleComponent = ({ title }) => (
    <div className='flex items-center gap-1'>
      <span className='text-xl font-semibold'>{title}</span>
      <MdArrowOutward size={"1.8rem"} className='pb-1' />
    </div>
  )
  return (
    <main>
      <article>
        <div className='flex items-center gap-10 sm:justify-normal md:flex-col md:items-start md:gap-3'>
          <h1 className='text-black text-2xl font-medium md:text-4xl'>Account Area</h1>
          <DateComponent />
        </div>
      </article>
      <article className='mt-10'>
        {/* <div className='grid grid-cols-2 gap-y-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {
            products.map((value, index) => {
              const { brand, _id, price, date } = value
              return <ProductCard key={index} index={index} id={_id} price={price} brand={brand} date={date}/>
            })
          }
        </div> */}
        <aside className='grid grid-cols-2 gap-4 lg:grid-cols-4'>
          {
            homeArrow.map((value, index) => (
              <HomeArrow title={value.title} svg={value.svg} key={index} />
            ))
          }
        </aside>
        <aside className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10 text-black'>
          <div className='bg-white shadow-lg rounded-md p-3'>
            <div className='flex items-center'>
              <TitleComponent title={"Sales"} />
            </div>
            <CircleState />
          </div>
          <div className='bg-white shadow-lg rounded-md p-3'>
            <TitleComponent title={"Sales per day"} />
            <BarState />
          </div>
        </aside>
        <aside className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10 text-black'>
          <div className='bg-white shadow-lg rounded-md p-3'>
            <div className='flex items-center'>
              <TitleComponent title={"Weekly Payments"} />
            </div>
            <LineState />
          </div>
          <div className=' rounded-md p-3'>
            <TitleComponent title={"Recomended for You"} />
            <div className='grid grid-cols-2 gap-4 pt-3 xl:grid-cols-3'>
              {
                [...Array(3)].map((value, index) => (
                  <div key={index} className='bg-white shadow-lg rounded-md p-3'>
                    <img src={thumbnail} alt="" />
                    <p>How to increase your sales....</p>
                    <div className='flex justify-end gap-1 text-gray-500'>
                      <span className='text-sm'>Read more</span>
                      <MdArrowOutward size={"1.5rem"} className='pb-1' />
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </aside>
      </article>

    </main>
  )
}

export default Home