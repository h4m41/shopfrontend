import React from 'react'

const CategoryItem = ({item}) => {
  return (
    <div className="bg-red-500 relative  md:h-[500px] h-[200px] md:w-[400px] w-[282px]">
      <img
        src={item.img}
        className=" object-cover h-full w-full"
        alt="category image"
      />
      <p className="absolute md:top-52 top-16  font-semibold md:text-3xl w-full drop-shadow-md text-center text-white left-1/2   transform -translate-x-1/2">
        {" "}
        {item.title}
      </p>
      <button className="absolute hover:text-trueGray-400 hover:shadow-lg left-1/2 -translate-x-1/2 top-2/3 bg-white text-trueGray-500 px-4 py-3   transform -translate-y-1/2">
        SHOP NOW
      </button>
    </div>
  );
}

export default CategoryItem