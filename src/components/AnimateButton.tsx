"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { motion, useAnimation } from "framer-motion";
const AnimateButton = () => {
  const [hoverbutton, setHover] = useState(false);


  return (
    <div>
      <div>
        <button
          className={`relative bg-white text-black xl:w-[13%] lg:w-[20%] md:w-[27%] w-[60%] py-3 rounded-lg  `}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <motion.svg
           
            className={`  xl:w-[22%] h-[80%] md:w-[22%] w-[24%] rounded-full absolute right-2 bottom-1 transition-colors transform duration-500   border-2 border-[rgb(56,39,199)] ${
              hoverbutton ? "bg-white" : "bg-[rgb(56,39,199)]"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 32 32"
            width="17"
            height="17"
            preserveAspectRatio="xMidYMid meet"
            style={{
             /*  width: "22%",
              height: "80%", */
              transform: "translate3d(0px, 0px, 0px)",
              contentVisibility: "visible",
            }}
          >
            <defs>
              <clipPath id="__lottie_element_4">
                <rect width="32" height="32" x="0" y="0"></rect>
              </clipPath>
              <clipPath id="__lottie_element_6">
                <path d="M0,0 L32,0 L32,32 L0,32z"></path>
              </clipPath>
              <g id="__lottie_element_9">
                <g
                  transform="matrix(1,0,0,1,16,16)"
                  opacity="1"
                  style={{ display: "block" }}
                >
                  <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                    <path
                      fill="rgb(0,0,0)"
                      fill-opacity="1"
                      d=" M0,-16 C8.830400466918945,-16 16,-8.830400466918945 16,0 C16,8.830400466918945 8.830400466918945,16 0,16 C-8.830400466918945,16 -16,8.830400466918945 -16,0 C-16,-8.830400466918945 -8.830400466918945,-16 0,-16z"
                    ></path>
                  </g>
                </g>
              </g>
              <mask id="__lottie_element_9_1" mask-type="alpha">
                <use xlinkHref="#__lottie_element_9"></use>
              </mask>
            </defs>
            <g clip-path="url(#__lottie_element_4)">
              <g mask="url(#__lottie_element_9_1)" style={{ display: "block" }}>
                <g
                  clip-path="url(#__lottie_element_6)"
                  transform="matrix(1,0,0,1,0,0)"
                  opacity="1"
                >
                  <g
                    transform="matrix(1,0,0,1,16,16)"
                    opacity="1"
                    style={{ display: "block" }}
                  ></g>
                  <g
                    transform="matrix(0.3314799964427948,0,0,1,10.703034400939941,22.672000885009766)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      {/* -------------Draw Line---------------------------------- */}
                      <motion.path 
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill-opacity="0"
                        stroke={hoverbutton ? "rgb(56,39,199)" : "white"}
                        stroke-opacity="1"
                        stroke-width="2"
                        d="M-12,0 C-12,0 12,0 12,0"
                        initial={{ pathLength: 0, pathOffset: 1, x: -20 }} // Start with pathLength: 0, pathOffset: 1, and x position off-screen
                        animate={{ pathLength: 1, pathOffset: 0, x: 0 }} // Animate to pathLength: 1, pathOffset: 0, and x position on-screen
                        transition={{
                          duration: 0.5,
                          ease: "easeInOut",
                          repeat: Infinity,
                          repeatDelay: 1,
                        }} // Animation duration and easing
                      ></motion.path>
                    </g>
                  </g>
                  <g
                    transform="matrix(0.905683696269989,-0.4239540100097656,0.4239540100097656,0.905683696269989,16.5362606048584,16.222768783569336)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    {/* -----Rotation Animation------------------------------------- */}
                    <motion.g
                      initial={{ y: -5 }}
                      animate={{
                        y: 0, // Animate to y-offset of 0
                        rotate: -360, // Set initial rotation to 0
                        
                        transition: {
                          rotate: {
                            
                            duration: 0.6,
                            ease: "easeInOut",
                            repeat:Infinity,
                            repeatDelay:1,
                          }, // Rotate with duration 1 second
                        },
                      }}
                      opacity="1"
                      transform="matrix(1,0,0,1,0,0)"
                    >
                      <motion.path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill-opacity="0"
                        stroke={hoverbutton ? "rgb(56,39,199)" : "white"}
                        stroke-opacity="1"
                        stroke-width="1"
                        d=" M1.531000018119812,-6.468999862670898 C1.531000018119812,-6.468999862670898 -5.593999862670898,0.6880000233650208 -5.593999862670898,0.6880000233650208 C-5.593999862670898,0.6880000233650208 -5.561999797821045,3.5309998989105225 -5.561999797821045,3.5309998989105225 C-5.561999797821045,3.5309998989105225 -3.125,3.4690001010894775 -3.125,3.4690001010894775 C-3.125,3.4690001010894775 4.218999862670898,-4 4.218999862670898,-4 C4.218999862670898,-4 1.531000018119812,-6.468999862670898 1.531000018119812,-6.468999862670898z"
                        initial={{ x: -6, y: -2 }}
                        animate={{ x: 0, y: 0 }}
                        transition={{
                          duration: 0.5,
                          ease: "easeInOut",
                          repeat: Infinity,
                          repeatDelay: 1,
                        }}
                      ></motion.path>
                    </motion.g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,-0.22499999403953552,-0.5609999895095825)"
                    ></g>
                  </g>
                </g>
              </g>
            </g>
          </motion.svg>
          <div className=" text-start md:pl-4 pl-6  ">
            <div className="overflow-hidden h-7 ">
              <motion.div
                initial={{ y: "0%" }}
                animate={{
                  y: hoverbutton ? "-80%" : "0%",
                }}
                className="pt-1 uppercase font-bold"
              >
                Contact Us
              </motion.div>
              <motion.div
                initial={{ y: "0%" }}
                animate={{ y: hoverbutton ? "-100%" : "0%" }}
                className=" uppercase font-bold"
              >
                Contact Us
              </motion.div>
            </div>
          </div>
        </button>
     
        {/* ---------------------- */}
      </div>
    </div>
  );
};

export default AnimateButton;
