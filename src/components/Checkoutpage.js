import React, { useContext } from "react";
import Cartpagecard from "./Cartpagecard";
import { BsCurrencyRupee } from "react-icons/bs";
import Datacontext from "../contexts/Datacontext";

const Checkoutpage = () => {
  const { cartproduct, cartsubtotal } = useContext(Datacontext);

  return (
    <>
      <div className="cart136">Checkout</div>
      <div className="cart111">
        <div className="cart112">
          <div className="cart114">
            <div className="cart115">1 Select a delivery address</div>
            <div className="cart116">
              <div className="cart117">Your address</div>
              <div className="cart118">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Facilis dicta adipisci ab inventore? Sunt repudiandae sequi
                obcaecati. Perspiciatis similique magnam quos, officia, cumque
                doloribus, saepe earum ab fugit a adipisci?
              </div>
              <div className="cart119">Add a new address</div>
            </div>
            <div className="cart120">
              <div className="cart121">Use this address</div>
            </div>
          </div>

          <div className="cart122">
            <div className="cart123">2 Payment Methods</div>
          </div>

          <div className="cart124">
            <div className="cart125">3 Items and delivery</div>
            <div className="cart126">
              {/* <Cartpagecard />
              <Cartpagecard />
              <Cartpagecard /> */}
              {cartproduct.map((product, index) => {
                return <Cartpagecard product={product} key={index} />;
              })}
            </div>
          </div>
        </div>
        <div className="cart113">
          <div className="cart127">
            <div className="cart128">
              Choose a shipping address and payment method to calculate
              shipping, handling and tax.
            </div>
            <div className="cart129">Order Summary</div>
            <div className="cart130">
              <div className="cart131">Items:</div>
              <div className="cart132">
                <BsCurrencyRupee /> {cartsubtotal}.00
              </div>
            </div>
            {/* <div className="cart130">
              <div className="cart131">Delivery Charge:</div>
              <div className="cart132">
                <BsCurrencyRupee /> 20.00
              </div>
            </div> */}
            <div className="cart133">
              <div className="cart134">Order Total:</div>
              <div className="cart135">
                <BsCurrencyRupee />
                {cartsubtotal}.00
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkoutpage;
