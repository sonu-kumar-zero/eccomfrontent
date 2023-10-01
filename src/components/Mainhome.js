import React, { useContext, useEffect } from "react";
import Productcard from "./Productcard";
import Datacontext from "../contexts/Datacontext";
import Carousal from "./Carousal";
import { useQuery } from "@apollo/client";
import { GET_TOP_10_PRODUCTS } from "../gql/queries";

const Mainhome = () => {
  const { setcartpageactive } = useContext(Datacontext);

  const { loading, error, data } = useQuery(GET_TOP_10_PRODUCTS);

  useEffect(() => {
    setcartpageactive(false);
  }, [setcartpageactive]);

  if (loading) {
    return <h1>Loading....</h1>;
  }

  if (error) {
    console.log(error);
  }

  return (
    <>
      <div className="hom22">
        <Carousal />
        <div className="hom25">
          <div className="hom26">
            Welcome To{" "}
            <span style={{ color: "teal" }}>Xorewear | wear all</span>
          </div>
        </div>
        <div className="hom27">
          <div className="hom28">Trending Nowadays</div>
        </div>
        <div className="hom29">
          {data &&
            data.topproduct.data.map((card, index) => {
              return <Productcard key={index} card={card.attributes} />;
            })}
        </div>
      </div>
    </>
  );
};

export default Mainhome;
