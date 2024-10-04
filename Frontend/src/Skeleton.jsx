import React from 'react'
import { Skeleton } from '@mui/material'

const SkeletonComponent = () => {

    return (
        <div className='h-screen w-screen relative flex '>
            <div className='hidden lg:flex w-[200px] absolute top-6 left-6 bottom-6'>
                <Skeleton variant="rounded" width={"100%"} height={"100%"} />
            </div>
            <div className=' absolute top-6 left-6 lg:left-[240px] right-6 h-[75px]'>
                <Skeleton variant="rounded" width={"100%"} height={"100%"} />
            </div>
            <div className='mx-auto w-11/12 pt-[140px] lg:pl-[200px]'>
                <div className=''>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                        <div className='flex flex-row justify-center items-center gap-10'>
                            <Skeleton variant="circular" width={300} height={300} />
                            <div className='flex flex-col gap-10'>
                                <Skeleton variant="rounded" width={60} height={10} />
                                <Skeleton variant="rounded" width={60} height={10} />
                                <Skeleton variant="rounded" width={60} height={10} />
                                <Skeleton variant="rounded" width={60} height={10} />
                            </div>
                        </div>
                        <div className='items-center gap-4'>
                            <Skeleton className='mx-auto' variant="rounded" width={"100%"} height={300} />
                        </div>
                    </div>
                </div>
                <div className='pt-10 flex'>
                <Skeleton className='mx-auto' variant="rounded" width={"30%"} height={200} />
                <Skeleton className='mx-auto' variant="rounded" width={"30%"} height={200} />
                <Skeleton className='mx-auto' variant="rounded" width={"30%"} height={200} />
                </div>
            </div>
        </div>
    )
}

export default SkeletonComponent 