import React from "react";

const PriceComp = ({
  image,
  userNumber,
  price,
  storage,
  storageUnit,
  allowedUsers,
  user,
  limit,
  styles,
  buttonStyles,
}) => {
  console.log(storageUnit);
  return (
    <div
      className={` ${styles} rounded-lg p-4 text-black flex flex-col  shadow-xl items-center w-96 mx-auto hover:scale-105 duration-300 hover:shadow-3xl py-9 `}
    >
      <img src={image} alt="/" className="w-28 mt-[-4rem] mx-auto" />
      <p className="text-xl font-bold mt-8">{userNumber}</p>
      <h2 className="text-2xl font-bold my-5">&#8366;{price}</h2>
      <p className="border-y-[1px] border-gray-200 py-2 w-full text-center">
        {storage} {storageUnit} Багтаамж
      </p>
      <p className="border-b-[1px] border-gray-200 py-2 w-full text-center">
        {allowedUsers} Зөвшөөрөгдсөн хэрэглэгч
      </p>
      <p className="border-b-[1px] border-gray-200 py-2 w-full text-center">
        {limit} {storageUnit} Оролтын хязгаар
      </p>
      <button
        className={` bg-green-400 max-w-fit text-gray-700 px-20 py-2 rounded-md font-bold hover:bg-green-600 hover:text-white duration-300 mx-auto md:mx-0 text-center my-5 ${buttonStyles}`}
      >
        Эхлэх
      </button>
    </div>
  );
};

export default PriceComp;
