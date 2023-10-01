import React, { useEffect, useContext } from "react";
import Productcard from "./Productcard";
// import hood from "../data/hoodies";
// import mugs from "../data/mugs";
// import tshirt from "../data/tshirts";
// import sticker from "../data/stickers";
// import girl from "../data/girls";
import { useParams } from "react-router-dom";
import Datacontext from "../contexts/Datacontext";
import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS_BY_CATEGORY } from "../gql/queries";

const ProductList = () => {
  const { product, id } = useParams();

  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS_BY_CATEGORY, {
    variables: {
      categoryId: id,
    },
  });

  const { setcartpageactive } = useContext(Datacontext);
  useEffect(() => {
    setcartpageactive(false);
  }, [setcartpageactive]);

  if (loading) {
    return <h1>loading....</h1>;
  }

  if (error) {
    console.log(error);
  }

  if (data) {
    console.log(data.category.data.attributes.products.data);
  }

  return (
    <>
      <div className="prod38">{product}</div>
      <div className="hom29">
        {data &&
          data.category.data.attributes.products.data.map((card, index) => {
            return (
              <Productcard
                key={index}
                id = {card.id}
                card={card.attributes}
                category={product}
              />
            );
          })}
      </div>
    </>
  );
};

export default ProductList;
