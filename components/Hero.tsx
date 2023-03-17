import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import CarImg from "../public/toonmecom_243892.jpeg";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Yoav",
      "Tom The Gosh Gosh",
      "Chen 'Lo!'",
      "Kira DAYYYYY!!!",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className=" rounded-full h-32 w-32 mx-auto object-cover"
        src={CarImg}
        alt=""
      />
      <div>
        <h2 className="text-sm uppercase pb-2 tracking-[15px]">
          Software Engineer
        </h2>
      </div>
      <div>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="red" />
        </h1>
      </div>
      <div className="pt-5 z-20">
        <Link href={"#about"}>
          <button className="heroButton">About</button>
        </Link>
        <Link href={"#workexperience"}>
          <button className="heroButton">WorkExperience</button>
        </Link>
        <Link href={"#skills"}>
          <button className="heroButton">Skills</button>
        </Link>
        <Link href={"#projects"}>
          <button className="heroButton">Projects</button>
        </Link>
      </div>
    </div>
  );
}
