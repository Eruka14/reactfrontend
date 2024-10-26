import React from "react";
import PriceComp from "./PriceComp";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Pricing = () => {
  return (
    <div className="w-full bg-white py-40">
      <div className="max-w-[1240px] mx-auto p-4 flex flex-col gap-[10rem] lg:flex-row lg:justify-center lg:gap-8">
        <PriceComp
          image={Single}
          userNumber="Ганц хэрэглэгч"
          price="506,600"
          storage="1000"
          storageUnit="GB"
          allowedUsers={1}
          user="User"
          limit={2}
        />
        <PriceComp
          image={Double}
          userNumber="Түншлэл"
          price="676,600"
          storage="6000"
          storageUnit="GB"
          allowedUsers={3}
          user="Users"
          limit={10}
          styles={"bg-gray-100 scale-105 hover:scale-110"}
          buttonStyles={
            "bg-gray-800 text-green-400 hover:bg-slate-800 hover:text-white"
          }
        />
        <PriceComp
          image={Triple}
          userNumber="Олон хэрэглэгч"
          price="1,016,600"
          storage="5000"
          storageUnit="GB"
          allowedUsers={10}
          user="Users   "
          limit={20}
        />
      </div>
    </div>
  );
};

export default Pricing;
