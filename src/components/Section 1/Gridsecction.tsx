"use client";
import React, { useState } from "react";
import Oppo from "../../../public/images-removebg-preview.png";
import Udemy from "../../../public/udemy-logo-on-dark.png";
import ubl from "../../../public/ubl.png";
import creative from "../../../public/creative.png";
import seneca from "../../../public/Seneca.png";
import auth from "../../../public/auth.png";
import corel from "../../../public/corel.png";
import gif from '../../../public/cardgif.gif'
import { motion} from "framer-motion";
import Image from "next/image";

const gridData = [
  {
    image: Oppo,
    desc: "  Designing mobile concepts for a popular brand in electronic products.",
  },
  {
    image: Udemy,
    desc: " Reimaggining the video player for course and overall viewer experience.",
  },
  {
    image: ubl,
    desc: "  Developing a full-stack application as a part of the hi-end audio brand's marketing compaign.",
  },
  {
    image: creative,
    desc: " Online marketplace that provides a platform for creators to buy and sell design assets.",
  },
  {
    image: seneca,
    desc: "  Designing a powerful educational platform for effective learning.",
  },
  {
    image: auth,
    desc: " Using our experties to boost Auth0 processes.",
  },
  {
    image: corel,
    desc: "  Showcasing a future vision for WinZip family products.",
  },
];
const Gridsecction = () => {
  const [isHovered, setIsHovered] = useState(-1);
  const itemVariants = {
    hover: {
      backgroundColor: "blue",
      color: "white",
    },
    unhover: {
      backgroundColor: "initial",
      color: "initial",
    },
  };

  return (
    <div className="mt-1">
      <div className=" bg-gradient-to-tr from-75%   from-[#251a53]  to-[#3a2787]">
        <div className="xl:px-10 px-5 py-10">
          <div className="grid lg:grid-cols-4  md:grid-cols-2  lg:gap-0 md:gap-4">
            {/* -Grid first col------------------------------------------------- */}
            {gridData.map((item, index) => (
              <>
                <div
                  key={index}
                  className= {` h-72 mb-4 md:mb-0 flex justify-center  items-center  border lg:border-0   py-14 
                  ${index===3 ?"md:border lg:border-0" :'lg:border-e '}
                  ${index <4 ? "lg:border-b":''}`}
                >
                  <div
                    className=" xl:mx-12 mx-2 "
                    onMouseEnter={() => setIsHovered(index)}
                    onMouseLeave={() => setIsHovered(-1)}
                  >
                    <motion.div
                      initial={{ y: "50%", opacity: 1 }}
                      animate={{
                        y: isHovered === index ? "0%" : "50%",
                        opacity: isHovered === index ? 1 : 1,
                      }}
                      transition={{ stiffness: 300 }}
                      className=""
                    >
                      <Image
                        src={item.image}
                        width={170}
                        height={170}
                        alt="Oppo"
                        className="mx-auto xl:w-40 lg:w-32"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{
                        y: isHovered === index ? 0 : "100%",
                        opacity: isHovered === index ? 1 : 0,
                      }}
                      transition={{ stiffness: 300 }}
                      className={`mt-5 `}
                    >
                      <p className="text-white  text-center">{item.desc}</p>
                    </motion.div>
                  </div>
                </div>
              </>
            ))}
            <div className=" h-72  flex justify-center    border lg:border-0 py-14">
              <div className=" mx-10">
                <div className="">
                  <Image src={gif} width={110} height={110} alt="earth rotating" className="mx-auto"/>
                </div>
                <div className="mt-2 xl:font-semibold font-medium text-white">
                  <p>
                    350+ clients worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Static Card --------------------------------------------------------------------- */}
        </div>
      </div>
    </div>
  );
};

export default Gridsecction;
