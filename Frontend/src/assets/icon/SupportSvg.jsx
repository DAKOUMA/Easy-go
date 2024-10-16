import React from 'react'

const SupportSvg = ({ color = "#646464", size = "22" }) => {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22.9549C18.0751 22.9549 23 18.0402 23 11.9775C23 5.91478 18.0751 1 12 1C5.92487 1 1 5.91478 1 11.9775C1 18.0402 5.92487 22.9549 12 22.9549Z" stroke={color} strokeOpacity="0.9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19.3337 4.65918L15.0253 8.95869M15.0253 8.95869C16.6729 10.6041 16.6729 13.3521 15.0253 14.9963M15.0253 8.95869C13.3778 7.31451 10.6241 7.31451 8.97533 8.95869M4.66699 19.2958L8.97533 14.9963M8.97533 14.9963C7.32777 13.3521 7.32777 10.6041 8.97533 8.95869M8.97533 14.9963C10.6229 16.6405 13.3765 16.6405 15.0253 14.9963M4.66699 4.65918L8.97533 8.95869M19.3337 19.2958L15.0253 14.9963" stroke={color} strokeOpacity="0.9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default SupportSvg