import React, { useEffect, useState } from 'react'
import ProductCard from "../components/static/ProductCard"
import { useProductStore } from '../../store/product'
import { Pagination } from '@mui/material'
const Product = () => {
  const { products } = useProductStore()

  const calculateBrandCount = products.reduce((acc, product) => {
    acc[product.brand] = (acc[product.brand] || 0) + 1;
    return acc;
  }, [])
  const sortedCount = (Object.entries(calculateBrandCount).map(([brand, count]) => ({ brand, count }))).sort((a, b) => b.count - a.count)

  const calculateBrandPrice = products.reduce((acc, product) => {
    acc[product.brand] = (acc[product.brand] || 0) + Number(product.price);
    return acc
  }, [])
  const sortedPrice = (Object.entries(calculateBrandPrice).map(([brand, total]) => ({ brand, total }))).sort((a, b) => b.count - a.count)

  const handleUnion = () => {
    let union = []
    for (let i = 0; i < sortedPrice.length; i++) {
      const brandOf = sortedPrice[i].brand
      const priceOf = sortedPrice[i].total

      for (let i = 0; i < sortedCount.length; i++) {
        const countOf = sortedCount[i].count

        if (brandOf === sortedCount[i].brand) {
          union.push({ brand: brandOf, totale: priceOf, count: countOf })
        }

      }
    }
    return union
  }

  const union = handleUnion()

  return (
    <main>
      <article>
        <div className='flex items-center gap-10 sm:justify-normal md:flex-col md:items-start md:gap-3'>
          <h1 onClick={() => console.log(handleUnion())} className='text-black text-2xl font-medium md:text-4xl'>Account Area</h1>
        </div>
      </article>
      <article className='mt-10'>
        <div className='grid grid-cols-2 gap-y-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
          {union ?
            union.sort((a, b) => b.count - a.count).map((value, index) => {
              const { brand, totale, count } = value
              return <ProductCard key={index} index={index} price={totale} brand={brand} count={count} />
            }) : ""
          }
        </div>
      </article>
    </main>
  )
}

export default Product