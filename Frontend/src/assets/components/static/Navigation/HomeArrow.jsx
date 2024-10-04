import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const HomeArrow = ({ title, svg, dataSpec }) => {
    const Svg = svg
    return (
        <div className='text-black mx-auto w-full px-3 py-2 rounded-md flex flex-col gap-3 bg-white shadow-lg'>
            <div className='flex items-baseline justify-between'>
                <div className='flex items-baseline gap-2'>
                    <div className='' ><Svg color='#000000' size="20" /></div>
                    <span className=''>{title}</span>
                </div>
                <MdArrowOutward size={"1.5rem"} />
            </div>
            <div className='text-2xl font-bold'> $2,500</div>
        </div>
    )
}

export default HomeArrow