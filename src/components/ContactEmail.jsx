import React from "react";

const ContactEmail = () => {
  return (
    <div className="max-w-[1240px] mx-auto p-4 flex flex-col gap-2 md:flex-row md:justify-between my-10">
      <div className="flex flex-col gap-2 md:flex-2">
        <h2 className="text-md font-bold md:text-xl">
          Та ямар нэгэн зөвлөгөө авахыг хүсэж байна уу?
        </h2>
        <p className="text-sm md:text-base">
          Даарах форм дээр өөрийн и-мэйлийг оруулна уу.
        </p>
      </div>
      <div>
        <div className="flex flex-col gap-2 my-4 md:flex-row md:justify-center md:items-center">
          <input
            type="text"
            placeholder="И-мэйл хаяг"
            className="w-full rounded-md p-2 text-sm    "
          />
          <a
            href="#"
            className="bg-green-400 max-w-fit text-gray-700 px-20 py-2 rounded-md font-bold hover:bg-green-600 hover:text-white duration-300 mx-auto md:mx-0 text-center"
          >
            Илгээх
          </a>
        </div>
        <p className="text-sm w-[30ch]">
          Бид таны мэдээллийг хамгаалах талаар санаа тавьдаг. Та манай{" "}
          <a
            href="#"
            className="underline text-indigo-500 cursor-pointer hover:text-indigo-300"
          >
            Нууцлалын бодлого
          </a>{" "}
          уншина уу.
        </p>
      </div>
    </div>
  );
};

export default ContactEmail;
