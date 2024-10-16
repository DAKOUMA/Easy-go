import React from 'react'

const LogoutSvg = ({ color = "#646464", size = "22" }) => {
    return (
        <svg width={size} height={size} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5 4.87888L14.949 6.59868L17.787 9.75775H6.6V12.1972H17.787L14.949 15.3441L16.5 17.0761L22 10.9775M2.2 2.43944H11V0H2.2C0.99 0 0 1.09775 0 2.43944V19.5155C0 20.8572 0.99 21.9549 2.2 21.9549H11V19.5155H2.2V2.43944Z" fill={color} fillOpacity="0.9" />
        </svg>
    )
}

export default LogoutSvg