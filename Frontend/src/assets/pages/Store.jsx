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
  )
}

export default Store