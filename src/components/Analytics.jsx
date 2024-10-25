import React from "react";
import laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-10">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center items-center md:flex-row gap-4">
        <img
          src={laptop}
          className="flex-1 max-w-[400px] max-h-[400px] md:max-w-[500px] md:max-h-[500px]"
        />
        <div className="flex-1 flex flex-col items-start text-black gap-3 p-3">
          <h3 className="text-md md:text-xl font-bold text-green-400">
            Өгөгдлийн хянах самбар
          </h3>
          <h1 className="text-xl md:text-3xl font-bold">
            Өгөгдлийг төвлөрсөн байдлаар удирдах
          </h1>
          <p className="text-sm md:text-base">
            Өгөгдлийг төвлөрсөн байдлаар удирдах гэдэг нь байгууллага эсвэл
            системийн бүх өгөгдлийг нэг төв серверт цуглуулж, хянах, удирдах
            аргыг хэлнэ. Энэ арга нь өгөгдлийн аюулгүй байдал, найдвартай
            байдал, зардлыг хэмнэх, өгөгдөл ашиглахад хялбар болгох зэрэг олон
            давуу талтай.
          </p>
          <a
            href="#"
            className="bg-gray-900 text-green-400 px-20 py-2 rounded-md font-bold mt-3 hover:bg-gray-950 hover:text-white duration-300 mx-auto md:mx-0"
          >
            Эхлэх
          </a>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
