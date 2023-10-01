import { useMutation } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_USER } from "../gql/mutation";
import Datacontext from "../contexts/Datacontext";

const Login = () => {
  const [loginUser, { loading, error, data }] = useMutation(LOGIN_USER);
  const { setuser } = useContext(Datacontext);

  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleformdatachange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setformData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlebuttonaction = () => {
    console.log(formData);
    try {
      loginUser({
        variables: {
          input: {
            identifier: formData.email,
            password: formData.password,
          },
        },
      });
    } catch (error) {
      console.log(error.message);
    }
    setformData({
      username: "",
      email: "",
      password: "",
      confirmpass: "",
    });
  };

  useEffect(() => {
    if (data) {
      if (data.login) {
        setuser(data.login);
        navigate("/");
      }
    }
  }, [data, setuser, navigate]);


  return (
    <>
      <div className="log137">
        <Link
          onClick={() => {
            navigate("/");
          }}
          className="link"
        >
          <div className="log141">Xorewear</div>
        </Link>
        <div className="log138">
          <div className="log139">LogIn To Continue</div>
          {loading ? (
            <h2 style={{ color: "yellow" }}>Logging, Please Wait ...</h2>
          ) : (
            ""
          )}
          {error ? <h2 style={{ color: "red" }}>{error.message}</h2> : ""}
          <div className="log140">
            <input
              type="text"
              placeholder="Email..."
              value={formData.email}
              name="email"
              onChange={handleformdatachange}
            />
            <input
              type="password"
              placeholder="Password..."
              value={formData.password}
              name="password"
              onChange={handleformdatachange}
            />

            <button onClick={handlebuttonaction}>login</button>
            <span>
              Don't Have an Account{" "}
              <p
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Sign Up
              </p>
            </span>

            {/* <span>
              Forgot Password{" "}
              <p
                onClick={() => {
                  navigate("/forgotpass");
                }}
              >
                Change Password
              </p>
            </span> */}
            <span>
              <Link to={"/"} className="link">
                <p style={{ color: "teal", cursor: "pointer" }}>Back To Home</p>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
