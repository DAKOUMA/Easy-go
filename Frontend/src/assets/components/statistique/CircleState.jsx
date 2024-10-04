import React, { useEffect, useState } from 'react'
import { useProductStore } from '../../../store/product'
import { PieChart } from '@mui/x-charts'
// import { PieChart } from 'react-minimal-pie-chart';

const CircleState = () => {
    const [pieData, setPieData] = useState('')

    const { products, filterProductByDate, dateSaved, productByDate, date } = useProductStore()


    // function to return an Object where brand as sorter by top Three, and other is in Other

    useEffect(() => {
        if (products.length > 0 && dateSaved) {
            filterProductByDate(products, dateSaved)
        }
    }, [products, dateSaved])

    useEffect(() => {
        if (products.length > 0) {
            const productCount = productByDate.reduce((acc, item) => {
                acc += item.count
                return acc
            }, 0)
    
            const dataPie = productByDate.map(({ brand, count }, index) => ({ label: brand, value: count, id: index }))
    
            setPieData({ total: productCount, data: dataPie })
        }
    }, [productByDate])

    return (
        <div className='h-[300px] w-auto flex mx-auto ' onClick={() => console.log(dateSaved)}>
            {pieData ?
                // <PieChart
                //     lineWidth={20}
                //     paddingAngle={4}
                //     totalValue={pieData.total}
                //     data={pieData.data}
                //     animate={true}
                //     labelStyle={{
                //         "fontSize": "5px",
                //         "fontFamily": "sans-serif"
                //       }}
                // /> 
                <PieChart
                    className='text-[0.8rem] font-medium mx-auto'
                    colors={['#FFE1C2', '#FFD2A3', '#FFB466', '#FF8200']}
                    series={[
                        {
                            arcLabelMinAngle: 35,
                            arcLabelRadius: '60%',
                            data: pieData.data,
                            paddingAngle: 3,
                            innerRadius: 100,
                            cornerRadius: 5,
                        },
                    ]}
                    slotProps={{
                        legend: {
                            labelStyle: {
                                fontSize: 12,
                                fontWeight: 500,
                            },
                            itemMarkWidth: 12,
                            itemMarkHeight: 12,
                            itemGap: 10,
                        },
                    }}
                    width={350}
                    height={300}
                />
                : ""
            }
        </div>
    )
}
export default CircleState