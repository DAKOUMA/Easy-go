import React from 'react'

const Dropdown = ({ color = "#646464" }) => {
    return (
        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 1.47754L8 8.47754L1 1.47754" stroke={color} strokeOpacity="0.9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

export default Dropdown