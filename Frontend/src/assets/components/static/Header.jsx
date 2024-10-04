import React, { useEffect, useState } from 'react'
import { generalList, horizontalList, mainList } from './Navigation/NavListData'
import NavList from './Navigation/NavBar'
import { logo, notify, photo } from '../..'
import BarSvg from '../../icon/BarSvg'
import { AnimatePresence, motion, useMotionValue, useMotionValueEvent, useScroll } from 'framer-motion'

const Header = () => {
    const [listID, setListID] = useState('')
    const [openToggle, setOpenToggle] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isScrolled, setIsScrolled] = useState(false);

    const { scrollY } = useScroll()
    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 0);
    })

    const variantHeader = {
        initial: { y: 10 },
        animate: { y: 0 }
    }

    const handleListID = (param) => {
        if (param === listID) {
            setListID('')
        } else {
            setListID(param)
        }
    }

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);
        if (windowWidth > 767 && openToggle === false) {
            setOpenToggle(true)
        }

        // Cleanup function to remove the event listener
        return () => window.removeEventListener('resize', handleResize);
    });


    return (
        <>
            <div className='fixed py-3 px-3 md:hidden z-50'> <BarSvg openToggle={openToggle} setOpenToggle={setOpenToggle} /> </div>
            <AnimatePresence>
                {openToggle ?
                    <motion.div
                        className="fixed top-16 h-min navbar-vertical w-[200px] z-50 bg-white border pb-10  md:top-0 md:bottom-0 md:h-auto md:pt-8"
                        initial={{ x: '-100vh' }}
                        animate={{ x: openToggle ? 0 : '-100vh' }}
                        exit={{ x: '-100vh' }}
                        transition={{ type: 'tween' }}
                    >
                        <img className='hidden md:flex pl-4' src={logo}></img>
                        <div className='main'>
                            <h2 className='pb-5 pt-7 pl-4'>MAIN MENU</h2>
                            <ul className='main-list flex flex-col gap-3'>
                                {
                                    mainList.map((value, index) => (
                                        <NavList
                                            key={value.title}
                                            title={value.title}
                                            SvgComponent={value.svg}
                                            path={value.path}
                                            children={value.children}
                                            handleListID={handleListID}
                                            listID={listID}
                                        />
                                    ))
                                }
                            </ul>
                        </div>
                        <div className='generale'>
                            <h2 className='py-4 pl-4'>GENERAL</h2>
                            <ul className='general-list flex flex-col gap-3'>
                                {
                                    generalList.map((value, index) => (
                                        <NavList
                                            key={value.title}
                                            title={value.title}
                                            SvgComponent={value.svg}
                                            path={value.path}
                                            children={value.children}
                                            handleListID={handleListID}
                                            listID={listID}
                                        />
                                    ))
                                }
                            </ul>
                        </div>
                    </motion.div> : ''}
            </AnimatePresence>
            <div className={`navbar-horizontal w-full flex justify-end fixed py-3 px-3 right-0 z-10 ${isScrolled ? ' shadow-md bg-white' : ''} transition-all`}>
                <motion.div
                    className='horizontal-list flex items-center gap-20'
                    variants={variantHeader}
                    initial={isScrolled ? 'initial' : 'animate'}
                    animate={isScrolled ? 'animate' : 'initial'}
                >
                    <ul className='hidden xl:flex gap-12 relative navbar-1-ul'>
                        {
                            horizontalList.map((value, index) => (
                                <NavList
                                    key={value.title}
                                    title={value.title}
                                    SvgComponent={value.svg}
                                    path={value.path}
                                    children={value.children}
                                    handleListID={handleListID}
                                    listID={listID}
                                />
                            ))
                        }
                    </ul>
                    <ul className='flex items-center gap-12'>
                        <li><img src={notify} alt="" /></li>
                        <li><img src={photo} alt="" /></li>
                    </ul>
                </motion.div>
            </div>
        </>
    )
}

export default Header