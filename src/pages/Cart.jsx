import { Remove, Add } from "@mui/icons-material";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Cart = () => {
  return (
    <div className="flex text-sm flex-col">
      <Navbar />
      <div className="p-5 sm:p-3">
        <h1 className="font-light text-center">YOUR BAG</h1>
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between p-5">
          <button className="md:px-3 p-1 rounded md:py-2  hover:bg-gray-200 md:font-semibold border-2 border-black cursor-pointer">
            CONTINUE SHOPPING
          </button>
          <div className=" sm:flex">
            <span className="underline cursor-pointer mx-3">
              Shopping Bag(2)
            </span>
            <span className="underline cursor-pointer mx-3">
              Your Wishlist (0)
            </span>
          </div>
          <button
            className="md:px-3 p-2 md:py-2 rounded hover:bg-gray-700 font-semibold bg-black text-white"
            type="filled"
          >
            CHECKOUT NOW
          </button>
        </div>
        <div className="flex justify-between flex-col sm:flex-row">
          <div className="flex-1">
            <div className="flex justify-between">
              <div className="flex-2   flex">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0-BrtoSibyXs_NYPQ_HsDIG3UXs5Mln0pfw&usqp=CAU"
                  alt="Product"
                  className="w-12 self-center h-fit md:w-48"
                />
                <div className="p-5 flex flex-col justify-around">
                  <span>
                    <b>Product:</b> White Denim Shirt
                  </span>
                  <span>
                    <b>ID:</b> 92378432896
                  </span>
                  <div className={`w-5 h-5 rounded-full bg-black`} />
                  <span>
                    <b>Size:</b> 37.5
                  </span>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="flex items-center mb-5">
                  <Add />
                  <span className="w-8 h-8 border rounded border-kgreen-500 text-xl flex items-center justify-center">
                    1
                  </span>{" "}
                  <Remove />
                </div>
                <div className="text-3xl font-light">$ 30</div>
              </div>
            </div>

            <hr className="bg-gray-300 border-none h-px" />
          </div>
          <div className="flex  mt-12 md:mt-0">
            <div className="border md:w-96 w-full border-gray-300 rounded-xl p-5 ">
              <h1 className="font-light">ORDER SUMMARY</h1>
              <div className="my-8 flex justify-between">
                <span>Subtotal</span>
                <span>$ 60</span>
              </div>
              <div className="my-8 flex justify-between">
                <span>Estimated Shipping</span>
                <span>$ 5.90</span>
              </div>
              <div className="my-8 flex justify-between">
                <span>Shipping Discount</span>
                <span>$ -5.90</span>
              </div>
              <div className="my-8 flex justify-between font-semibold text-2xl">
                <span>Total</span>
                <span>$ 60</span>
              </div>
              <button
                className="px-3 py-2 rounded hover:bg-gray-700 w-full font-semibold bg-black text-white"
                type="filled"
              >
                CHECKOUT NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
