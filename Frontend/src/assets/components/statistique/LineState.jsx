import { LineChart } from '@mui/x-charts'
import React from 'react'

const LineState = () => {
    return (
        <div className='h-[400px] flex mx-auto '>
            <LineChart
                xAxis={[{ data: [1, 2, 3, 4, 5, 6] }]}
                series={[
                    { curve: "monotoneX", data: [6, 7, 5, 9, 5, 6], color: "#FF3A54" },
                    { curve: "monotoneX", data: [5, 3, 4, 10, 4, 3], color: '#FF8200'},
                ]}
                height={400}
            />
        </div>
    )
}

export default LineState