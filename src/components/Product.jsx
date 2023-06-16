import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";

import { Link } from "react-router-dom";

const Product = ({ item }) => {
  return (
    <div className="relative flex flex-col items-center justify-center flex-1 m-5 min-w-[280px] h-[350px] bg-white ">
      <div className="absolute w-[200px] h-[200px] bg-kgreen-50 rounded-full"></div>
      <img src={item.img} alt="Product" className="h-3/4 z-10" />
     
     



      <div className="absolute opacity-0 w-full h-full top-0 left-0 bg-black bg-opacity-20 z-30 flex items-center justify-center transition-all duration-500 cursor-pointer hover:opacity-100">
       
        <div className="flex items-center space-x-3">
         
         
          <div className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center transition-all duration-500 transform group-hover:scale-110">
            <ShoppingCartOutlined className="h-5 w-5" />
          </div>
          <div className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center transition-all duration-500 transform group-hover:scale-110">
            <Link to={`/product/${item._id}`}>
              <SearchOutlined className="h-5 w-5" />
            </Link>
          </div>
          <div className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center transition-all duration-500 transform group-hover:scale-110">
            <FavoriteBorderOutlined className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
