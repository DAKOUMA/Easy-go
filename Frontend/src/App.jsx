import React, { useEffect, useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { generalList, mainList } from './assets/components/static/Navigation/NavListData'
import Header from './assets/components/static/Header'
import { useProductStore } from './store/product.js'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import SkeletonComponent  from './Skeleton.jsx'



const App = () => {

  const { products, productByDate, getProduct, filterProductByDate, dateSaved, date } = useProductStore()
  const [loading, setLoading] = useState(true)

  //#sale#-2 use the function in #sale#-1 to update the sale Array in products


  // useEffect(() => {
  //   axios.get("http://localhost:5000/api/products")
  //     .then((response) => {
  //       const productsFetch = handleTransformDAte(response.data)
  //       setProducts(productsFetch)
  //     });
  // }, [])

  //#date# Store the date in dateSaved when user pick a idate

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        await getProduct();
      } finally {
        setLoading(false); // Set loading to false when fetch is completed
      }
    }

    fetchProduct()
  }, [])

  useEffect(() => {
    if (products.length > 0) {
      filterProductByDate(products, dateSaved)
    };
  }, [products])


  return (
    <>
      {
        !loading ?
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <>
              <Header />
              <Routes>
                {mainList.map((value, index) => {
                  const Components = value.element
                  return <Route key={index} path={value.path} element={<Components />} />
                })}
                {generalList.map((value, index) => {
                  const Components = value.element
                  return <Route key={index} path={value.path} element={<Components />} />
                })}
              </Routes>
              {/* <Footer/> */}
            </>
          </LocalizationProvider>
          :
          <SkeletonComponent />

      }
    </>
  )
}

export default App