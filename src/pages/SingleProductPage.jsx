import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Remove , Add} from "@mui/icons-material";




const SingleProductPage = () => {

  return (
    <div>
      <Navbar />
      <div className="flex-col flex w-full   md:w-[1000px] items-center  lg:w-[1200px]">
        <div className="bg-white relative flex flex-col md:flex-row md:w-[90%] md:p-12 md:mt-16 rounded-md">
          <div className="md:w-[35%] flex flex-col items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/4352249/pexels-photo-4352249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="w-56 h-80 mt-6 md:mt-0 object-contain"
              />
            </div>
            {/* 
            <div className="w-56  mt-8 md:mt-16">
              {" "}
            
            </div> */}
          </div>
          <div className=" md:w-[65%] flex-col p-6">
            <p className="font-semibold md:text-2xl text-xl mt-6 md:mt-0">
              Black Shirt{" "}
            </p>
            <div className="flex flex-col-reverse md:flex-col">
              <div className="mt-10 flex flex-col">
                <p>
                  Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Saepe, sint unde quo hic ratione eum consequatur
                  repudiandae natus voluptates, delectus dolorem at qui culpa et
                </p>
              </div>
              <div>
                <div className=" mt-4 justify-between">
                  <div>
                    {" "}
                    <p className=" text-3xl mb-4 font-light ">$ 20</p>
                    <div className="flex gap-10">
                      <div className="flex items-center gap-2">
                        {" "}
                        <p className="font-light">Color:</p>{" "}
                        <div className="w-5 h-5 rounded-full bg-blue-500"></div>{" "}
                        <div className="w-5 h-5 rounded-full bg-red-500"></div>{" "}
                        <div className="w-5 h-5 rounded-full bg-green-500"></div>{" "}
                      </div>
                      <div className="flex gap-2 items-center">
                        <p className="font-light">Size</p>
                        <select
                          className=" border-solid border  p-1 px-2 md:p-2"
                          name=""
                          id=""
                        >
                          {" "}
                          <option selected value="">
                            XS
                          </option>
                          <option value="">S</option>{" "}
                          <option value="">M</option>{" "}
                          <option value="">L</option>{" "}
                          <option value="">XL</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex mt-6 gap-6">
                  <div className="flex items-center gap-2 text-xl">
                    <button>
                      {" "}
                      <Remove />{" "}
                    </button>{" "}
                    <span className="w-8 h-8 text-xl border rounded border-kgreen-500 flex items-center justify-center">
                      1
                    </span>{" "}
                    <button>
                      {" "}
                      <Add />
                    </button>
                  </div>
                  <div>
                    {" "}
                    <button className="md:px-4 md:py-2  py-2 w-32 md:w-40 hover:shadow-md border-2 border-kgreen-600 hover:bg-kgreen-50 rounded  ">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" ">
        <Footer />
      </div>
    </div>
  );
};

export default SingleProductPage;
