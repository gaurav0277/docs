import React from "react";
import { FaFileLines } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "motion/react";

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 200, bounceDamping: 35 }}
      className=" relative w-60 h-72 rounded-[40px] flex-shrink-0 bg-black py-10 px-5 text-white overflow-hidden"
    >
      <FaFileLines />
      <p className=" text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full  left-0">
        <div className="flex bg-black  items-center justify-between py-3 px-8 ">
          {" "}
          {/* mb-5 */}
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 rounded-full flex items-center justify-center bg-white text-black cursor-pointer">
            {data.close ? (
              <IoClose />
            ) : (
              <LuDownload size={".7em"} color="#000" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor == "green" ? "bg-green-600" : "bg-sky-600"
            }  flex items-center justify-center `}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagtitle}</h3>
          </div>
        )}
      </div>
      
    </motion.div>
  );
}

export default Card;
