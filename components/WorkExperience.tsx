import React from "react";
import { motion } from "framer-motion";
import ExpirienceCard from "./ExpirienceCard";

type Props = {};

export default function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center "
    >
      <h3 className="absolute top-24 tracking-[20px] text-[rgb(254,231,21)] text-2xl uppercase">
        WorkExperience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-[rgb(16,24,32)] scrollbar-thumb-[rgb(254,231,21)]">
        <ExpirienceCard />
        <ExpirienceCard />
        <ExpirienceCard />
        <ExpirienceCard />
      </div>
    </motion.div>
  );
}
