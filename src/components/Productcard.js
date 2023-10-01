import React, { useContext } from "react";
import Stars from "./Stars";
import { BsCurrencyRupee } from "react-icons/bs";
import { Link } from "react-router-dom";
import Datacontext from "../contexts/Datacontext";
import { BACKEND_URL } from "./../helper";

const Productcard = ({ category, card, id }) => {
  const { images, name, price, stars } = card;
  const { setcurproductdetail } = useContext(Datacontext);

  const curproductdatasetter = () => {
    // const obj = { img: img, category: category, title: title, stars: stars, price: price };
    setcurproductdetail({ ...card, id: id });
  };

  return (
    <>
      <Link
        to={`/${category}/${name}`}
        onClick={curproductdatasetter}
        className="link cardlink"
      >
        <div className="card30">
          <div className="card31">
            {images && (
              <img
                src={`${BACKEND_URL + images.data[0].attributes.url}`}
                alt="cup"
                loading="lazy"
              />
            )}
          </div>
          <div className="card36">
            <div className="card32">
              {/* category */}
              {category}
            </div>
            <div className="card33">
              {/* title */}
              {name}
            </div>
            <div className="card34">
              <Stars stars={stars} />
            </div>
            <div className="card35">
              <div className="card37">
                <BsCurrencyRupee />
                {price}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Productcard;
