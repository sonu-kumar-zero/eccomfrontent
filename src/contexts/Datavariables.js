import React, { useEffect, useState } from "react";
import Datacontext from "./Datacontext";

const Datavariables = ({ children }) => {
  const [curproductdetail, setcurproductdetail] = useState(null);
  const [cartpageactive, setcartpageactive] = useState(false);
  const [user, setuser] = useState(null);
  const [cartproduct, setcartproduct] = useState([]);
  const [cartsubtotal, setcartsubtotal] = useState(0);
  const [cartquantity, setcartquantity] = useState(0);


  useEffect(() => {
    let subTotal = 0;
    let count = 0;
    cartproduct.map((item) => {
      subTotal += item.quantity * item.price;
      count += item.quantity;
      return subTotal;
    });
    setcartsubtotal(subTotal);
    setcartquantity(count);
  }, [cartproduct]);

  const addProductInCart = (product, quantity) => {
    let items = [...cartproduct];
    let index = items.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      items[index].quantity += quantity;
    } else {
      product.quantity = quantity;
      items = [product, ...items];
    }
    setcartproduct(items);
  };

  const removeProoductFromCart = (product) => {
    let items = [...cartproduct];
    items = items.filter((p) => p.id !== product.id);
    setcartproduct(items);
  };

  const handlecartproductquantity = (type, product) => {
    let items = [...cartproduct];
    let index = items.findIndex((p) => p.id === product.id);
    if (type === "inc") {
      items[index].quantity += 1;
    } else if (type === "dec") {
      if (items[index].quantity !== 1) {
        items[index].quantity -= 1;
      }
    }
    setcartproduct(items);
  };

  return (
    <Datacontext.Provider
      value={{
        cartproduct,
        cartsubtotal,
        cartquantity,
        addProductInCart,
        removeProoductFromCart,
        handlecartproductquantity,
        user,
        setuser,
        cartpageactive,
        setcartpageactive,
        curproductdetail,
        setcurproductdetail,
      }}
    >
      {children}
    </Datacontext.Provider>
  );
};

export default Datavariables;
