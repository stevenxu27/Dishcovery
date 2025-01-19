import React from "react";

function FoodContainer({
  vegImage,
  Name,
  Price,
  Weight,
  Description,
  altText,
}) {
  return (
    <div className=" border-2 border-black w-fit rounded-[2rem] p-[24px] flex flex-col gap-[1rem] bg-white">
      <div className=" flex justify-center items-center">
        <img
          src={vegImage}
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
