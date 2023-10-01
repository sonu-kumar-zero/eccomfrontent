import React, { useContext, useEffect } from "react";
import Datacontext from "../contexts/Datacontext";
import Cartpagecard from "./Cartpagecard";
import { BsCurrencyRupee } from "react-icons/bs";
// import Cartsavedcard from "./Cartsavedcard";
import { Link } from "react-router-dom";

const Cartpage = () => {
  const { setcartpageactive, cartsubtotal, cartproduct } =
    useContext(Datacontext);
  useEffect(() => {
    setcartpageactive(true);
  }, [setcartpageactive]);

  useEffect(() => {}, [cartproduct]);

  return (
    <>
      <div className="cart75">
        <div className="cart76">
          <div className="cart78">
            <div className="cart79">Shopping Cart</div>
            <div className="cart80"></div>
            <div className="cart81">
              {cartproduct.length > 0 &&
                cartproduct.map((product, index) => {
                  return <Cartpagecard key={index} product={product} />;
                })}
              {/* <Cartpagecard /> */}
            </div>
            <div className="cart82">
              Subtotal(1 item): <BsCurrencyRupee /> {cartsubtotal}
            </div>
          </div>

          {/* <div className="cart94">
            <div className="cart95">Saved Items</div>
            <div className="cart96">
              <Cartsavedcard />
              <Cartsavedcard />
            </div>
          </div> */}
        </div>
        <div className="cart77">
          <div className="cart107">
            <div className="cart108">
              Subtotal(1 item):
              <BsCurrencyRupee />
              <span className="cart110">{cartsubtotal}.00</span>
            </div>
            <Link className="link" to={"/cart/checkout"}>
              <div className="cart109">proceed to buy</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cartpage;
