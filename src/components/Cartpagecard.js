import React, { useContext, useEffect, useState } from "react";
import { BsCurrencyRupee } from "react-icons/bs";
import { BACKEND_URL } from "../helper";
import Datacontext from "../contexts/Datacontext";

const Cartpagecard = ({ product }) => {
  const [itemselected, setitemselected] = useState(true);
  const { handlecartproductquantity, removeProoductFromCart } =
    useContext(Datacontext);

  useEffect(() => {}, [product.quantity]);

  return (
    <>
      <div className="cart83">
        <div className="cart84">
          <input
            type="checkbox"
            checked={itemselected}
            onChange={() => {
              setitemselected(!itemselected);
            }}
            name=""
            id=""
          />
          <img
            src={`${BACKEND_URL + product.images.data[0].attributes.url}`}
            alt="product"
            loading="lazy"
          />
        </div>
        <div className="cart85">
          <div className="cart86">{product.name}</div>
          <div className="cart87">
            <BsCurrencyRupee />
            <span className="cart88">{product.price}.00</span>
          </div>
          <div className="cart89">In stock</div>
          <div className="cart90">Xorewear Delivered</div>
          <div className="cart91">
            <div className="cart92">
              {/* Qty:{" "}
              <select name="" id="">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
              </select> */}
              <div
                onClick={() => {
                  handlecartproductquantity("dec", product);
                }}
              >
                -
              </div>
              Qty: {product.quantity}
              <div
                onClick={() => {
                  handlecartproductquantity("inc", product);
                }}
              >
                +
              </div>
            </div>

            <div
              className="cart93"
              onClick={() => {
                removeProoductFromCart(product);
              }}
            >
              Delete
            </div>
            <div className="cart93">Save for later</div>
            <div className="cart93">Share</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cartpagecard;
