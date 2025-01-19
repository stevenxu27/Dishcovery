import React from "react";
import Risotto from "./images/risotto-alla-crema.jpeg";

function FoodContainer({
  vegImage,
  Name,
  Price,
  Description,
  altText,
}) {
  return (
    <div className=" border-2 border-black w-[24rem] rounded-[2rem] p-[24px] flex flex-col gap-[1rem] bg-white">
      <div className=" flex justify-center items-center">
        <img
          src="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/547d98d9-0e88-409f-90ab-51a9cae35bba/Derivates/7b1d49bd-ad43-48ac-b182-920e686feb71.jpg"
          alt={altText}
          width={100}
          height={100}
          className="max-w-[15rem] max-h-[15rem] flex justify-center items-center  w-full"
        />
      </div>
      <h4> {Name} </h4>
      <div className="border-b border-black"></div>
      <div className="flex flex-row justify-between w-full">
        <p> {Price}</p>
        <p> {Description} </p>
      </div>
    </div>
  );
}

export default FoodContainer;
