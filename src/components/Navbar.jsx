import React, { useState, useRef, useEffect, useCallback } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import gsap from "gsap";

const Navbar = ({ heroRef, analyticsRef, contactRef, pricingRef }) => {
  const [nav, setNav] = useState(false);
  const navRef = useRef(null);
  const scrollToRef = useCallback((ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.to(navRef.current, {
        x: nav ? "0%" : "-100%",
        duration: 0.3,
        ease: "power2.inOut",
        onStart: () => {
          if (nav) {
            navRef.current.style.visibility = "visible";
          }
        },
        onComplete: () => {
          if (!nav) {
            navRef.current.style.visibility = "hidden";
          }
        },
      });
    }
  }, [nav]);

  return (
    <div className="flex justify-between items-center max-w-[1240px] mx-auto py-5 px-4">
      <h1 className="text-2xl md:text-3xl font-bold text-green-400">ViReact</h1>
      <ul className="hidden items-center gap-10 md:flex font-semibold">
        <li className=" hover:text-green-400 cursor-pointer duration-200">
          <a onClick={() => scrollToRef(heroRef)}>Нүүр</a>
        </li>
        <li className=" hover:text-green-400 cursor-pointer duration-200">
          <a onClick={() => scrollToRef(analyticsRef)}>Байгууллага</a>
        </li>
        <li className=" hover:text-green-400 cursor-pointer duration-200">
          <a onClick={() => scrollToRef(contactRef)}>Холбоо барих</a>
        </li>
        <li className=" hover:text-green-400 cursor-pointer duration-200">
          <a onClick={() => scrollToRef(pricingRef)}>Үйлчилгээ</a>
        </li>
      </ul>
      <div onClick={() => setNav(!nav)} className="md:hidden">
        {!nav ? (
          <AiOutlineMenu className="text-2xl cursor-pointer" />
        ) : (
          <AiOutlineClose className="text-2xl cursor-pointer" />
        )}
      </div>
      {/* Mobile Menu */}
      <div
        className="fixed top-0 left-0 w-[60%] h-full bg-[#030712] border-r border-r-gray-900 text-sm md:text-base"
        ref={navRef}
        style={{ visibility: "hidden", transform: "translateX(-100%)" }}
      >
        <h1 className="text-3xl font-bold text-green-400 m-4">ViReact</h1>
        <ul className="list-none pt-10 uppercase p-4">
          <li className="p-4 border-b border-gray-600 hover:text-green-400 hover:font-bold cursor-pointer duration-200">
            <a
              onClick={() => {
                scrollToRef(heroRef);
                setNav(false);
              }}
            >
              Нүүр
            </a>
          </li>
          <li className="p-4 border-b border-gray-600 hover:text-green-400 hover:font-bold cursor-pointer duration-200">
            <a
              onClick={() => {
                scrollToRef(analyticsRef);
                setNav(false);
              }}
            >
              Байгууллага
            </a>
          </li>
          <li className="p-4 border-b border-gray-600 hover:text-green-400 hover:font-bold cursor-pointer duration-200">
            <a
              onClick={() => {
                scrollToRef(contactRef);
                setNav(false);
              }}
            >
              Холбоо барих
            </a>
          </li>
          <li className="p-4 border-b border-gray-600 hover:text-green-400 hover:font-bold cursor-pointer duration-200">
            <a
              onClick={() => {
                scrollToRef(pricingRef);
                setNav(false);
              }}
            >
              Үнэ
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
