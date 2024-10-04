import { motion, MotionConfig } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const BarSvg = ({ color = "#ff3a54", openToggle, setOpenToggle }) => {

    return (
        <svg
            onClick={() => setOpenToggle(prev => !prev)}
            width="40"
            height="40"
            viewBox="0 0 10.583333 10.583333"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs />
            <g id="layer1">
                <motion.path
                    initial={{x: 0 }}
                    animate={{ x: openToggle ? 100 : 0 }}
                    transition={{ duration: 0.4, type: 'tween' }}
                    id="rect2"
                    style={{
                        fill: color,
                        strokeWidth: "21.6269",
                        strokeLinecap: "square",
                        strokeMiterlimit: "4.9"
                    }}
                    d="m 1.5445477,0.95487249 h 7.4942379 c 0.277,0 0.5,0.22300001 0.5,0.50000001 v 0.5622028 c 0,0.277 -0.223,0.5 -0.5,0.5 H 1.5445477 c -0.277,0 -0.5,-0.223 -0.5,-0.5 V 1.4548725 c 0,-0.277 0.223,-0.50000001 0.5,-0.50000001 z"
                />
                <motion.path
                    initial={{x: 0 }}
                    animate={{ x: openToggle ? 100 : 0 }}
                    transition={{ duration: 0.4, type: 'tween' }}
                    id="rect3"
                    style={{
                        fill: color,
                        strokeWidth: "21.6269",
                        strokeLinecap: "square",
                        strokeMiterlimit: "4.9"
                    }}
                    d="m 1.5445477,7.8908739 h 7.4942379 c 0.277,0 0.5,0.223 0.5,0.5 v 0.5622028 c 0,0.277 -0.223,0.5 -0.5,0.5 H 1.5445477 c -0.277,0 -0.5,-0.223 -0.5,-0.5 V 8.3908739 c 0,-0.277 0.223,-0.5 0.5,-0.5 z"
                />
                <motion.path
                    initial={{x: 0 }}
                    animate={{ x: openToggle ? 100 : 0 }}
                    transition={{ duration: 0.4, type: 'tween' }}
                    id="rect4"
                    style={{
                        transformOrigin: "center",
                        fill: color,
                        strokeWidth: "21.6269",
                        strokeLinecap: "square",
                        strokeMiterlimit: "4.9"
                    }}
                    d="m 1.5445477,4.422873 h 7.4942379 c 0.277,0 0.5,0.223 0.5,0.5 v 0.5622028 c 0,0.277 -0.223,0.5 -0.5,0.5 H 1.5445477 c -0.277,0 -0.5,-0.223 -0.5,-0.5 V 4.922873 c 0,-0.277 0.223,-0.5 0.5,-0.5 z"
                />
            </g>
            <g id="g7">
                <motion.path
                    initial={{ x: 40 , y: -60, rotateZ: -360  }}
                    animate={{ x: openToggle ? 0 : 40, y: openToggle ? 0 : -60, rotateZ: openToggle ? 0 : -360 }}
                    transition={{ duration: 0.4, type: 'tween'}}
                    id="path7"
                    style={{
                        fill: color,
                        strokeWidth: "21.6269",
                        strokeLinecap: "square",
                        strokeMiterlimit: "4.9"
                    }}
                    d="M 3.1943755,2.0020391 8.493602,7.3012655 c 0.1958685,0.1958686 0.1958685,0.5112382 0,0.7071068 L 8.0960646,8.4059097 c -0.1958686,0.1958686 -0.5112382,0.1958686 -0.7071068,0 L 2.0897313,3.1066833 c -0.1958685,-0.1958686 -0.1958685,-0.5112382 0,-0.7071068 L 2.4872687,2.0020391 c 0.1958686,-0.1958686 0.5112382,-0.1958686 0.7071068,0 z"
                />
                <motion.path
                initial={{ x: -40 , y: 60, rotateZ: -360  }}
                animate={{ x: openToggle ? 0 : -40, y: openToggle ? 0 : 60, rotateZ: openToggle ? 0 : -360 }}
                transition={{ duration: 0.4, type: 'tween'}}
                    id="path8"
                    style={{
                        fill: color,
                        strokeWidth: "21.6269",
                        strokeLinecap: "square",
                        strokeMiterlimit: "4.9"
                    }}
                    d="M 8.4936019,3.1066833 3.1943755,8.4059097 c -0.1958686,0.1958685 -0.5112382,0.1958685 -0.7071068,0 L 2.0897313,8.0083724 c -0.1958686,-0.1958687 -0.1958686,-0.5112383 0,-0.7071069 L 7.3889577,2.0020391 c 0.1958686,-0.1958685 0.5112382,-0.1958685 0.7071069,0 l 0.3975373,0.3975374 c 0.1958686,0.1958686 0.1958686,0.5112381 0,0.7071068 z"
                />
            </g>
        </svg>
    );
};

export default BarSvg