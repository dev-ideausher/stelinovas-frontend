"use client";
const Contact = () => {
  return (
    <div className="contact-container flex justify-center items-center">
      <div className="flex flex-col justify-between items-center contact-box">
        <div className="w-600 h-2 bg-[#a88aff]"></div>
        <div className="flex justify-between">
          <div className="pr-40">
            <p className="text-2xl text-[#a88aff]">DO YOU WANT TO BE FIRST</p>
            <p className="text-4xl text-white">TO KNOW ABOUT THE GAME?</p>
          </div>
          <div className="input-container">
            <input type="text" placeholder="Your email" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className="w-600 h-2 bg-[#a88aff]"></div>
      </div>
    </div>
  );
};

export default Contact;
