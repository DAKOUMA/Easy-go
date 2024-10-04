import { BarChart } from '@mui/x-charts'
import React, { useEffect, useState } from 'react'
import { useProductStore } from '../../../store/product'


const BarState = () => {
    const [dayState, setDayState] = useState('')

    const { products } = useProductStore()

    useEffect(() => {
        if (products.length > 0) {
            const calculateDate = products.reduce((acc, product) => {
                acc[product.date] = (acc[product.date] || 0) + 1;
                return acc;
            }, [])

            const calculateBill = products.reduce((acc, product) => {
                acc[product.date] = (acc[product.date] || 0) + Number(product.price);
                return acc;
            }, [])

            const object = Object.entries(calculateDate).map(([date, count]) => ({ date, count }))
            const sortedData = object.sort((a, b) => new Date(a.date) - new Date(b.date));

            const dates = sortedData.map(item => item.date);
            const counts = sortedData.map(item => item.count);
            setDayState({ dates, counts })
        }
    }, [products])

    return (
        <div>
            {
                dayState ?
                    <BarChart
                        xAxis={[{
                            scaleType: 'band',
                            data: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                            categoryGapRatio: 0.8,
                            barGapRatio: 0.3,
                            colorMap: {
                                type: 'piecewise',
                                thresholds: [12, 15, 17],
                                colors: [ "#FF3A54"],
                              }
                        }]}
                        series={[
                            { data: dayState.counts },
                        ]}
                        height={300}
                        borderRadius={5}
                    /> : ""
            }
        </div>
    )
}

export default BarState