import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="max-w-[1240px] mx-auto flex flex-col items-center justify-center h-screen gap-2 p-2">
      <p className="text-green-400 font-bold uppercase">
        Growing with data analytics
      </p>
      <h1 className="text-3xl md:text-5xl font-bold">Grow with data</h1>
      <p className="font-bold text-base text-center md:text-xl">
        <span className="text-gray-700">
          <ReactTyped
            strings={["SaaS", "D2C", "BTB", "BTC"]}
            typeSpeed={100}
            backSpeed={200}
            loop
          />
        </span>{" "}
        зориулсан, хурдан бөгөөд уян хатан нөхцөлтэй
      </p>
      <p className="text-base font-bold text-gray-600 text-center md:text-xl">
        BTC, BTB, & SaaS платформуудын өгөгдлийг хянаж, нягталж орлогыг
        нэмэгдүүлнэ.
      </p>
      <a
        href="#"
        className="bg-green-400 text-gray-700 px-20 py-2 rounded-md font-bold mt-3 hover:bg-green-600 hover:text-white duration-300"
      >
        Эхлэх
      </a>
    </div>
  );
};

export default Hero;
