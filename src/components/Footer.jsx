import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto p-4 flex flex-col gap-10 my-20 md:flex-row md:justify-between">
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl md:text-3xl font-bold text-green-400">
          ViReact
        </h1>
        <p className="md:max-w-[60ch] text-sm text-gray-200">
          Манай SaaS платформ нь маркетингийн аналитик, хэрэглэгчийн зан төлөв,
          борлуулалтын урьдчилсан тооцоолол зэрэгт суурилсан өгөгдлийг
          боловсруулж, оновчтой шийдэл гаргахад тань тусална.
        </p>
        <div className="flex justify-between gap-4 text-gray-400 md:justify-start my-6 md:my-2">
          <a
            href="#"
            className="text-2xl hover:text-green-400 transition duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="text-2xl hover:text-green-400 transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-2xl hover:text-green-400 transition duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-2xl hover:text-green-400 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="text-2xl hover:text-green-400 transition duration-300"
          >
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="flex gap-6 text-gray-400 flex-1 justify-between">
        <div className="flex justify-between gap-4 flex-1">
          <div className="flex flex-col gap-4">
            <h1 className="text-sm font-bold md:text-base">Шийдэл</h1>
            <ul className="flex flex-col gap-4 text-xs md:text-sm">
              <li>
                <a href="#">Аналитик</a>
              </li>
              <li>
                <a href="#">Маркетинг</a>
              </li>
              <li>
                <a href="#">Суртчилгаа</a>
              </li>
              <li>
                <a href="#">Алсын хараа</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-sm font-bold md:text-base">Тусламж</h1>
            <ul className="flex flex-col gap-4 text-xs md:text-sm">
              <li>
                <a href="#">Үнэ</a>
              </li>
              <li>
                <a href="#">Баримт, бичиг</a>
              </li>
              <li>
                <a href="#">Хөтөч</a>
              </li>
              <li>
                <a href="#">API статус</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-sm font-bold md:text-base">Компани</h1>
            <ul className="flex flex-col gap-4 text-xs md:text-sm">
              <li>
                <a href="#">Бидний тухай</a>
              </li>
              <li>
                <a href="#">Влог</a>
              </li>
              <li>
                <a href="#">Ажлын байр</a>
              </li>
              <li>
                <a href="#">Зорилго, зорилт</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-sm font-bold md:text-base">Хууль</h1>
            <ul className="flex flex-col gap-4 text-xs md:text-sm">
              <li>
                <a href="#">Нэхэмжлэл</a>
              </li>
              <li>
                <a href="#">Журам</a>
              </li>
              <li>
                <a href="#">Нөхцөл</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
