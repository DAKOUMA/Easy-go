import React, { useEffect, useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { generalList, mainList } from './assets/components/static/Navigation/NavListData'
import Header from './assets/components/static/Header'
import Footer from './assets/components/static/Footer'
import axios from 'axios'

const App = () => {
  const [dateSaved, setDateSaved] = useState('')
  const previousDataRef = useRef(null)

  const [sale, setSale] = useState([])
  const [date, setDate] = useState({
    startDate: "Sat Sep 28 2024 01:52:54 GMT+0300 (East Africa Time)",
    endDate: "Sat Sep 28 2024 01:52:54 GMT+0300 (East Africa Time)"
  });

  //#sale#-1 Function to transform all date of the sale Array in form DD/MM/YYYY
  const handleTransformDAte = (param) => {
    for (let i = 0; i < param.length; i++) {
      let itemDate = new Date(param[i].date);
      param[i].date = itemDate.toLocaleDateString("en-Us")
    }
    return param
  }

  //#sale#-2 use the function in #sale#-1 to update the sale Array in updatedDate
  const updatedDate = handleTransformDAte(sale)

  useEffect(() => {
    axios.get("https://my.api.mockaroo.com/sale_phone.json?key=ddb074f0")
      .then((response) => {
        setSale(response.data)
      });
  }, [])

  //#date# Store the date in dateSaved when user pick a date
  useEffect(() => {
    if (date.startDate && date.endDate) {
      let previousDate = ''

      previousDataRef.current = date
      previousDate = previousDataRef.current

      setDateSaved(previousDate.startDate)
    }
  }, [date])


  return (
    <>
      <Header />
      <Routes>
        {mainList.map((value, index) => {
          const Components = value.element
          return <Route key={index} path={value.path} element={<Components sale={updatedDate} setSale={setSale} date={date} dateSaved={dateSaved} setDate={setDate} />} />
        })}
        {generalList.map((value, index) => {
          const Components = value.element
          return <Route key={index} path={value.path} element={<Components sale={updatedDate} setSale={setSale} date={date} dateSaved={dateSaved} setDate={setDate} />} />
        })}
      </Routes>
      {/* <Footer/> */}
    </>
  )
}

export default App