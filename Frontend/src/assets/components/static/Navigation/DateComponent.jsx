import React, { useEffect } from 'react'
import { useProductStore } from '../../../../store/product';
import { DatePicker } from "@mui/x-date-pickers/DatePicker/DatePicker"
import dayjs from 'dayjs';

const DateComponent = () => {

  const { date, setDate, setDateSaved } = useProductStore()

  const MIN_DATE = new Date(2024, 8, 22);
  const MAX_DATE = new Date(2024, 8, 28);

  useEffect(() => {
    const stringDate = dayjs(date).format("YYYY-MM-DD")
    setDateSaved(stringDate)
  }, [date])


  return (
    <div>
      <DatePicker
      className='w-[150px]'
        value={date}
        onChange={(newValue) => setDate(newValue)}
        maxDate={dayjs("2024-09-28")}
        minDate={dayjs("2024-09-22")}
      />
    </div>
  )
}

export default DateComponent