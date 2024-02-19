"use client";
const Contact = () => {
  return (
    <div className="bg-[#0f053b] py-10 px-8">
      <div className="flex flex-wrap bg-faq-color py-10 px-5 rounded-lg">
        <div className="w-full md:w-1/2">
          <p className="text-xl  md:text-2xl text-[#a88aff]">
            DO YOU WANT TO BE FIRST
          </p>
          <p className="text-2xl md:text-4xl text-white">
            TO KNOW ABOUT THE GAME?
          </p>
        </div>
        <div className="w-full md:w-1/2 flex items-center  justify-center md:justify-end">
          <input
            type="text"
            className="p-3 bg-faq-box-xolor text-sm md:text-base text-white rounded-l-lg w-36 md:w-auto"
            placeholder="Your email"
          />
          <button className="bg-[#a88aff] p-3 text-white text-sm md:text-base rounded-r-lg w-24 md:w-auto">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
