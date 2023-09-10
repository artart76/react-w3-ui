import React from "react";

import logo from "../../images/eth.png";

const Footer = () => (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-transactions">
        <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
            <div className="flex flex-[0.5] justify-center items-center">
                <img src={logo} alt="logo" className="w-32" />
            </div>
            <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
                <p className="text-white text-base text-center mx-2 cursor-pointer">Рынок</p>
                <p className="text-white text-base text-center mx-2 cursor-pointer">Обмен</p>
                <p className="text-white text-base text-center mx-2 cursor-pointer">Документация</p>
            </div>
        </div>

        <div className="flex justify-center items-center flex-col mt-5">
            <p className="text-white text-sm text-center">Связь с разработчиком</p>
            <p className="text-white text-sm text-center font-medium mt-2">artdevsemyonov@gmail.com</p>
        </div>

        <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

        <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
            <p className="text-white text-left text-xs">@artdev2023</p>
            <p className="text-white text-right text-xs">Demo version</p>
        </div>
    </div>
);

export default Footer;