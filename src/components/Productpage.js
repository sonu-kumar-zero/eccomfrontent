import React, { useContext } from "react";
import Stars from "./Stars";
import { BsFacebook, BsCurrencyRupee } from "react-icons/bs";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import Datacontext from "../contexts/Datacontext";
import { Link } from "react-router-dom";
import ImageSet from "./Image/Imageset";

const Productpage = () => {
  const { curproductdetail, addProductInCart } = useContext(Datacontext);
  // const [dataadded, setdataadded] = useState(false);

  const { images, name, price, stars, description, id } = curproductdetail;

  const handleproductadd = () => {
    const obj = { name, price, stars, description, images, id, quantity: 0 };
    // console.log(obj);
    addProductInCart(obj, 1);
  };

  return (
    <>
      {curproductdetail === null ? (
        ""
      ) : (
        <>
          <div className="propa39">
            <div className="propa40">
              {images.data.length > 0 && <ImageSet images={images.data} />}
              {/* <img src={curproductdetail.img} alt="Product" /> */}
            </div>
            <div className="propa66">
              <div className="propa41">
                {/* <div className="propa42">Brand Name</div> */}
                <div className="propa43">{name}</div>
                <div className="propa44">
                  <div className="propa45">
                    <Stars stars={stars} />
                  </div>
                  <div className="propa46">4 Reviews</div>
                  <div className="propa47" style={{display:"none"}}>
                    <div className="propa48">
                      <BsFacebook className="propa48" />
                    </div>
                    <div className="propa48">
                      <AiFillInstagram className="propa48" />
                    </div>
                    <div className="propa48">
                      <AiFillGithub className="propa48" />
                    </div>
                  </div>
                </div>
                <div className="propa49">{description}</div>
                <div className="propa50" style={{ display: "none" }}>
                  <div className="propa51">
                    <div className="propa52">Color</div>
                    <div className="propa53"></div>
                    <div className="propa54"></div>
                    <div className="propa55"></div>
                  </div>
                  <div className="propa56">
                    <div className="propa57">Size</div>
                    <div className="propa58">
                      <select name="" id="">
                        <option value="">SM</option>
                        <option value="">M</option>
                        <option value="">L</option>
                        <option value="">XL</option>
                        <option value="">XLL</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="propa59">
                  <div className="propa60">
                    <BsCurrencyRupee /> {price}
                  </div>
                  <div
                    className="propa61"
                    style={{ padding: "10px 20px", fontSize: "18px" }}
                    onClick={handleproductadd}
                  >
                    Add To Cart
                  </div>
                  <Link to={"/cart"} className="link">
                    <div
                      className="propa62"
                      style={{ padding: "10px 20px", fontSize: "18px" }}
                      onClick={handleproductadd}
                    >
                      Buy Now
                    </div>
                  </Link>
                </div>
                <div className="propa63" style={{ display: "none" }}>
                  <div className="propa64">
                    <input
                      type="text"
                      placeholder="Enter Your Pin Code to check availability"
                    />
                  </div>
                  <div className="propa65">Check</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: "red" }}>review box</div>
        </>
      )}
    </>
  );
};

export default Productpage;
