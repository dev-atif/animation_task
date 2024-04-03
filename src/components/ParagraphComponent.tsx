"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
const Content =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil numquam voluptatibus quis deserunt veritatis officiis magni, placeat temporibus id saepe aliquam pariatur dolorum sit. Vero nemo consequuntur illo quo aut! ,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil numquam voluptatibus quis deserunt veritatis officiis magni, placeat temporibus id saepe aliquam pariatur dolorum sit. Vero nemo consequuntur illo quo aut! ipsum dolor, sit amet consectetur adipisicing elit. Nihil numquam voluptatibus quis deserunt veritatis officiis magni, placeat temporibus id saepe aliquam pariatur dolorum sit. Vero nemo consequuntur illo quo aut! ,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil numquam voluptatibus quis deserunt veritatis officiis magni, placeat temporibus id saepe aliquam pariatur dolorum sit. Vero nemo consequuntur illo quo aut!";

const ParagraphComponent = () => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.90", "start 0.4"],
  });

  const words = Content.split(" ");

  return (
    <div>
      <div>
        <p ref={element} className="flex flex-wrap leading-none   ">
          {words.map((word, idx) => {
            const start = idx / words.length;
            const end = start + 1 / words.length;
            console.warn("start", start, "end", end);
            /* const opacity = useTransform(scrollYProgress, [start, end], [0, 1]); */
            const char = word.split("");
            const amount = end - start;
            const step = amount / char.length;
            return (
              <span className="mr-2  mt-2 leading-10 font-semibold text-2xl">
                {/* ------Character Map */}
                {char.map((ch, idx) => {
                  const cstart = start + step * idx;
                  const cend = start + step * (idx + 1);
                  const opacity = useTransform(
                    scrollYProgress,
                    [cstart, cend],
                    [0, 1]
                  );
                  
                  return (
                    <span className="relative">
                      <span className="absolute opacity-30">{ch}</span> 
                      <motion.span  key={idx} style={{ opacity }} transition={{ duration: 2 }} >
                        {ch}
                      </motion.span>
                    </span>
                  );
                })}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default ParagraphComponent;
