import React, { useEffect, useState } from 'react'
import DateInput from '../components/static/Navigation/DateInput'
import dayjs from 'dayjs'
import axios from 'axios'
import { useProductStore } from '../../store/product'

const Store = () => {
  const [inputValue, setInputValue] = useState({ brand: '', price: 0, date: '' })
  const { createProduct, deleteProduct, products } = useProductStore()
  const [focus, setFocus] = useState({ focusBrand: false, focusPrice: false })

  const handleSubmit = (data) => {
    const dataSet = data

    const submit = async () => {
      try {
        await createProduct(dataSet)
        console.log("Product Create");
      } catch (error) {
        console.log("Error", error.message);
      }
    }
    submit()
  }
  const isValidBrand = (param) => {
    if ((param.brand).length > 3) {
      return true
    } else {
      return false
    }
  }

  const isValidPrice = (param) => {
    if (typeof(param.price) === Number) {
      return true
    } else {
      return false
    }
  }

  const bob = typeof(10)

  return (
    <main className='h-screen flex items-center justify-center'>
      <article className='border p-4 bg-slate-600 rounded-md'>
        <div className='flex items-center gap-10 sm:justify-normal md:flex-col md:items-start md:gap-3'>
          <h1 className=' text-2xl font-medium md:text-4xl text-white'>COMMING SOON</h1>
        </div>
      </article>
    </main>
    // <main className='h-screen'>
    //   <article>
    //     <div className='flex items-center gap-10 sm:justify-normal md:flex-col md:items-start md:gap-3'>
    //       <h1 className='text-black text-2xl font-medium md:text-4xl'>Stores Area</h1>
    //     </div>
    //   </article>
    //   <div className='mt-10'> 
    //     <form onSubmit={e => { e.preventDefault() }}>
    //       <fieldset className='flex flex-col lg:flex-row items-center gap-6'>
    //         <div className={`flex cursor-pointer flex-row-reverse justify-between items-center h-[56px] border rounded-md overflow-hidden w-[185px] p-3 ${focus.focusBrand ? 'border-blue-600 border-2' : "border-slate-400 "}`}>
    //           <label htmlFor="brand" className='cursor-pointer'>Brand</label>
    //           <input
    //             onFocus={() => setFocus(prev => ({ ...prev, focusBrand: true }))}
    //             onBlur={() => setFocus(prev => ({ ...prev, focusBrand: false }))}
    //             className='bg-transparent focus:outline-none w-[110px]'
    //             type="text"
    //             id='brand'
    //             name='brand'
    //             onChange={(e) => setInputValue(prev => ({ ...prev, brand: e.target.value }))}
    //           />
    //         </div>
    //         <div className={`flex cursor-pointer flex-row-reverse justify-between items-center h-[56px] border rounded-md overflow-hidden w-[185px] p-3 ${focus.focusPrice ? 'border-blue-600 border-2' : "border-slate-400 "}`}>
    //           <label htmlFor="price" className='cursor-pointer'>Price</label>
    //           <input
    //             onFocus={() => setFocus(prev => ({ ...prev, focusPrice: true }))}
    //             onBlur={() => setFocus(prev => ({ ...prev, focusPrice: false }))}
    //             className='bg-transparent focus:outline-none w-[110px]'
    //             type="text"
    //             id='price'
    //             name='price'
    //             onChange={(e) => setInputValue(prev => ({ ...prev, price: e.target.value}))}
    //           />
    //         </div>
    //         <DateInput inputValue={inputValue} setInputValue={setInputValue} />

    //         <button className='border p-3 rounded-md text-cyan-50 bg-slate-600' onClick={() => console.log(inputValue.price)}> Create Brand </button>
    //       </fieldset>
    //     </form>
    //   </div>
    // </main>
  )
}

export default Store