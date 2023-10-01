import { useMutation } from "@apollo/client";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SIGN_UP_USER } from "../gql/mutation";

const SignUp = () => {
  const [isPassAndConfirm, setisPassAndConfirm] = useState(true);
  const [formData, setformData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpass: "",
  });
  const [signUPuser, { loading, error, data }] = useMutation(SIGN_UP_USER);

  if (data) {
    console.log(data);
  }

  const handlebuttonaction = () => {
    if (formData.password === formData.confirmpass) {
      signUPuser({
        variables: {
          input: {
            email: formData.email,
            password: formData.password,
            username: formData.username,
          },
        },
      });
    } else {
      alert("password and confirm password should be same");
    }
  };

  const handleformdatachange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setformData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (formData.password !== formData.confirmpass) {
      setisPassAndConfirm(false);
    } else {
      setisPassAndConfirm(true);
    }
  }, [formData.confirmpass, formData.password]);

  return (
    <>
      <div className="log137">
        <Link to={"/"} className="link">
          <div className="log141">Xorewear</div>
        </Link>
        <div className="log138">
          <div className="log139">Sign Up to Create New Account</div>
          {loading ? (
            <h2 style={{ color: "yellow" }}>Logging, Please Wait ...</h2>
          ) : (
            ""
          )}
          {error ? <h2 style={{ color: "red" }}>{error.message}</h2> : ""}
          <div className="log140">
            <input
              type="text"
              placeholder="UserName..."
              value={formData.username}
              name="username"
              onChange={handleformdatachange}
            />
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

            <>
              <input
                type="password"
                placeholder="Confirm Password..."
                value={formData.confirmpass}
                name="confirmpass"
                onChange={handleformdatachange}
              />
              {!isPassAndConfirm && (
                <h3 style={{ color: "teal" }}>confirm password is not same</h3>
              )}
            </>
            <button onClick={handlebuttonaction}>Sign Up</button>
            <span>
              Have an Account{" "}
              <p
                onClick={() => {
                  navigate("/login");
                }}
              >
                Log IN
              </p>
            </span>
            {/* <span>
              Forgot Password{" "}
              <p
                onClick={() => {
                  setforgotpass(true);
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

export default SignUp;
