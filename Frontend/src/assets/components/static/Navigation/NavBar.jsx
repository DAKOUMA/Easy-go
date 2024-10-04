import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Dropdown from '../../../icon/Dropdown'
import { AnimatePresence, motion } from 'framer-motion'


const NavList = ({ title, SvgComponent, path, children = 0, handleListID, listID, className = '' }) => {
  const [openDropdown, setOpenDropdown] = useState(false)
  const [checkLocation, setCheckLocation] = useState('')

  const location = useLocation()

  const rotateArrowVariant = {
    initial: {
      rotateX: 0,
      transition: { duration: 0.3 }
    },
    animate: {
      rotateX: 180,
      transition: { duration: 0.3 }
    }
  }

  const toggleColorsSvg = `${checkLocation ? '#FF3A54' : "#646464"}`

  const subLinkVariant = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.1, when: 'beforeChildren', staggerChildren: 0.1 } }
  }

  useEffect(() => {
    if (listID === title) {
      setOpenDropdown(true)


    } else {
      setOpenDropdown(false)

    }
  }, [listID, title])

  useEffect(() => {
    if (location.pathname === path) {
      setCheckLocation(true)
    } else {
      setCheckLocation(false)
    }
  }, [location.pathname, path])

  return (
    <>
      <li className={`flex flex-col relative justify-between py-1 ${checkLocation ? 'bg-[#FFEEEE] border-r-2 border-color-1' : ''} nav-li ${className}`}>
        <div className='flex flex-row items-center justify-between nav-text'>
          <Link className='flex gap-2 grow pl-9' to={path}>
            {SvgComponent && <div className='w-7 nav-svg'> <SvgComponent color={toggleColorsSvg} /> </div>}
            <span className={`${checkLocation ? 'text-color-1' : ''} transition-all`} >{title}</span>
          </Link>
          {children ?
            <motion.div
              onClick={() => handleListID(title)} className='p-2 cursor-pointer pr-3'
              variants={rotateArrowVariant}
              initial={openDropdown ? 'initial' : 'animate'}
              animate={openDropdown ? 'animate' : 'initial'}
            >
              <Dropdown color={toggleColorsSvg} />
            </motion.div> : ''}
        </div>
        <AnimatePresence>
          {children ?
            <motion.ul
              className={`${openDropdown ? 'flex' : 'hidden'} flex-col gap-2 mt-4`}
              variants={subLinkVariant}
              initial='initial'
              animate={openDropdown ? 'animate' : 'initial'}
            >
              {children.map((value, index) => <motion.li className='text-center' variants={subLinkVariant} key={index}>{value.title}</motion.li>)}
            </motion.ul>
            : ''}
        </AnimatePresence>
      </li>
    </>
  )
}

export default NavList