import React from "react";
import Image from "next/image";
import CarImg from "../public/toonmecom_243892.jpeg";
import { motion } from "framer-motion";

type Props = {};

export default function ExpirienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden ">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="toonmecom_243892.jpeg"
        alt=""
      />
      <div className="px-0 md:px10">
        <h4 className="text-4xl font-light">CEO of YoavDdev</h4>
        <p className="font-bold text-2xl mt-1">YoavDdev</p>
        <div className="flex space-x-2 my-2">
          {/* Tech used */}
          {/* Tech used */}
          {/* Tech used */}
        </div>
        <p className="uppercase py-5 ">started work... - Ended...</p>
        <ul className="list-disc space-y-4 ml-5 text-lg h-[350px] overflow-y-scroll scrollbar-thin scrollbar-track-[rgb(16,24,32)] scrollbar-thumb-white ">
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Sollicitudin aliquam ultrices sagittis orci a scelerisque purus
            semper eget..
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus ut
            faucibus pulvinar elementum.
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Scelerisque viverra mauris in aliquam.
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Id
            faucibus nisl tincidunt eget nullam non nisi est.
          </li>
          <li>Summary pionts</li>
        </ul>
      </div>
    </article>
  );
}
