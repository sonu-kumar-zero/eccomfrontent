import React, { useContext } from "react";
import { BsCurrencyRupee } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../helper";
import Datacontext from "../contexts/Datacontext";

const Cartcard = ({ product }) => {
  // const navigate = useNavigate();
  // const category = "category";
  const { removeProoductFromCart } = useContext(Datacontext);

  return (
    <>
      <div
        className="link cardlink"
        // onClick={() => {
        //   navigate(`product/${category}/${product.name}`);
        // }}
      >
        <div className="cart67">
          <div className="cart68">
            <img
              src={`${BACKEND_URL + product.images.data[0].attributes.url}`}
              alt="Product"
            />
          </div>
          <div className="cart69">
            <div className="cart70">{product.name}</div>
            <div className="cart71">
              <BsCurrencyRupee /> {product.price} X {product.quantity}
            </div>
            <Link to={`/cart`} className="link">
              <div className="cart72">Buy Now</div>
            </Link>
            <div
              className="cart72"
              onClick={() => {
                removeProoductFromCart(product);
              }}
            >
              Remove
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cartcard;
