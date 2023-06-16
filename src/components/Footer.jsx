import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-1 flex flex-col p-20">
        <h1 className="text-3xl mb-5">TRENDIFY.</h1>
        <p className="mb-5">
          Welcome to our online clothing store! We offer a wide range of trendy
          and fashionable clothes for men, women, and children. we have
          something for every style and occasion.
        </p>
        <div className="flex">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-5">
            <Facebook className="text-white" />
          </div>
          <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center mr-5">
            <Instagram className="text-white" />
          </div>
          <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center mr-5">
            <Twitter className="text-white" />
          </div>
          <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center mr-5">
            <Pinterest className="text-white" />
          </div>
        </div>
      </div>
      <div className="flex-1 hidden md:block p-20">
        <h3 className="text-xl mb-5"> Links</h3>
        <ul className="m-0 p-0 list-none flex flex-wrap">
          <li className="w-1/2 mb-2">Home</li>
          <li className="w-1/2 mb-2">Cart</li>
          <li className="w-1/2 mb-2">Man Fashion</li>
          <li className="w-1/2 mb-2">Woman Fashion</li>
          <li className="w-1/2 mb-2">Accessories</li>
          <li className="w-1/2 mb-2">My Account</li>
          <li className="w-1/2 mb-2">Order Tracking</li>
          <li className="w-1/2 mb-2">Wishlist</li>
          <li className="w-1/2 mb-2">Terms</li>
        </ul>
      </div>
      <div className="flex-1 p-20 ">
        <h3 className="text-xl mb-5">Contact</h3>
        <div className="mb-5 flex items-center">
          <Room style={{ marginRight: "10px" }} /> Sulaimaniyah
        </div>
        <div className="mb-5 flex items-center">
          <Phone style={{ marginRight: "10px" }} /> 0770 358 5997
        </div>
        <div className="mb-5 flex items-center">
          <MailOutline style={{ marginRight: "10px" }} />{" "}
          customerservice@shop.com
        </div>
        <img
          src="https://i.ibb.co/Qfvn4z6/payment.png"
          alt="Payment"
          className="w-1/2"
        />
      </div>
    </div>
  );
};

export default Footer;
