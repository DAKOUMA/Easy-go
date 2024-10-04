import React, { useEffect } from 'react'
import { DatePicker } from "@mui/x-date-pickers/DatePicker/DatePicker"
import dayjs from 'dayjs';

const DateInput = ({ inputValue, setInputValue }) => {
    useEffect(() => {

    }, [])
    return (
        <div>
            <DatePicker
                id="date"
                name='date'
                className='w-[185px]'
                onChange={(e) => setInputValue(prev => ({ ...prev, date: e.format("YYYY-MM-DD") }))}
                maxDate={dayjs("2024-09-28")}
                minDate={dayjs("2024-09-22")}
            />
        </div>
    )
}

export default DateInput