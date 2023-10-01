import { useContext, useEffect } from "react";
import Cartcard from "./Cartcard";
import Datacontext from "../contexts/Datacontext";

const CartAllData = () => {
  const { cartproduct } = useContext(Datacontext);

  useEffect(() => {}, [cartproduct]);

  return (
    <>
      {cartproduct.length === 0 ? <div style={{color:"#ddd"}}>Your Cart Is Empty !!</div> : ""}
      {cartproduct.map((product, index) => {
        return <Cartcard product={product} key={index} />;
      })}
      {/* <Cartcard />
      <Cartcard />
      <Cartcard />
      <Cartcard />
      <Cartcard /> */}
    </>
  );
};

export default CartAllData;
