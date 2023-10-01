import React, { useContext, useEffect, useState } from "react";
import logo from "../images/xorewear-logo-1-final-1.png";
import { BsCart, BsCurrencyRupee } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import Datacontext from "../contexts/Datacontext";
import { AiOutlineLogin } from "react-icons/ai";
import { useQuery } from "@apollo/client";
import { GET_ALL_CATEGORIES } from "../gql/queries";
import CartAllData from "./CartAllData";

const Navbar = () => {
  const [cartstyle, setstyle] = useState({ transform: `translateX(500px)` });
  // const [cartstyle, setstyle] = useState({ transform: `translateX(0px)` });
  const { cartpageactive, cartsubtotal, user, cartquantity } =
    useContext(Datacontext);

  const { loading, error, data } = useQuery(GET_ALL_CATEGORIES);

  useEffect(() => {}, [cartquantity]);

  useEffect(() => {
    setstyle({ transform: `translateX(500px)` });
  }, [cartpageactive]);

  const opencart = () => {
    setstyle({ transform: `translateX(0px)` });
  };

  const closecart = () => {
    setstyle({ transform: `translateX(500px)` });
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    console.log(error);
  }

  return (
    <>
      <div className="nav1">
        <div className="nav2">
          <Link to={"/"} className="link">
            <div className="nav4">
              <img src={logo} alt="logo" />
            </div>
          </Link>
          {data &&
            data.categories.data.map((item, index) => {
              return (
                <Link
                  to={`${"/product/" + item.attributes.name + "/" + item.id}`}
                  className="link"
                  key={index}
                >
                  <div className="nav5">{item.attributes.name}</div>
                </Link>
              );
            })}
        </div>
        <div className="nav3">
          {user && (
            <div
              className="nav6"
              style={{ display: "flex", alignItems: "center" }}
            >
              {user.user.username}
            </div>
          )}
          {user === null && (
            <Link to={"/login"} className="link">
              <div
                className="nav6"
                style={{ display: "flex", alignItems: "center" }}
              >
                <AiOutlineLogin
                  className="reacticons"
                  style={{ display: "flex" }}
                />{" "}
                Login
              </div>
            </Link>
          )}
          {cartpageactive ? (
            ""
          ) : (
            <div className="nav6" onClick={opencart}>
              <BsCart className="reacticons" />
              {cartquantity}
            </div>
          )}
        </div>
      </div>

      {!cartpageactive ? (
        <div className="cart7" style={cartstyle} onMouseLeave={closecart}>
          <div className="cart8">
            <div className="cart9">
              <div className="cart10">Your Cart</div>
              <div className="cart11" onClick={closecart}>
                <RxCross1 className="reacticons" />
              </div>
            </div>
            <CartAllData />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#ddd",
                color: "#1f1f1f",
                padding: "10px",
                fontSize: "20px",
                borderRadius: "12px",
              }}
            >
              <div>Your Subtotal: </div>
              <BsCurrencyRupee style={{ color: "teal", display: "flex" }} />
              <div style={{ color: "teal" }}>{cartsubtotal}.00</div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {/* <div className="log137" style={authpage}>
                <div className="log141" onClick={closeauthpage}>
                    Xorewear
                </div>
                <div className="log138">
                    <div className="log139">
                        {
                            !forgotpass && loginorsignup === 'login' ? "LogIn To Continue" : ""
                        }
                        {
                            !forgotpass && loginorsignup !== 'login' ? "Sign Up to Create New Account" : ""
                        }
                        {
                            forgotpass ? "Forgotton Password" : ""
                        }
                    </div>
                    <div className="log140">
                        <input type="text" placeholder='Email...' />
                        {
                            !forgotpass ? <input type="password" placeholder='Password...' /> : ""
                        }

                        {
                            loginorsignup === 'login' ? "" : <input type="password" placeholder='Confirm Password...' />
                        }
                        <button>
                            {
                                !forgotpass && loginorsignup === 'login' ? "Log IN" : ""
                            }
                            {
                                !forgotpass && loginorsignup !== 'login' ? "Sign Up" : ""
                            }
                            {
                                forgotpass ? "Send a Reset Link" : ""
                            }
                        </button>
                        {
                            !forgotpass && loginorsignup === 'login' ? <span>Don't Have an Account <p onClick={() => { setloginorsignup('signup') }}>Sign Up</p></span> : <span>Have an Account <p onClick={() => {
                                setloginorsignup('login');
                                setforgotpass(false)
                            }}>Log IN</p></span>
                        }
                        {
                            !forgotpass && loginorsignup === 'login' ? <span>Forgot Password <p onClick={() => { setforgotpass(true) }}>Change Password</p></span> : ""
                        }
                        <span><p onClick={closeauthpage}>Back To Home</p></span>
                    </div>
                </div>
            </div> */}
    </>
  );
};

export default Navbar;
