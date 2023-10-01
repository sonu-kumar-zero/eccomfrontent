import { useMutation } from "@apollo/client";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_USER } from "../gql/mutation";

const ForgotPass = () => {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [forgotPass, { loading, error, data }] = useMutation(LOGIN_USER);

  const handlebuttonaction = () => {
    forgotPass({
      variables: {
        input: {},
      },
    });
  };

  if (data) {
    console.log(data);
  }

  const handleformdatachange = (e) => {
    setformData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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

            <button onClick={handlebuttonaction}>
              Send Forgot Password Link
            </button>
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

            <span>
              Have An Account{" "}
              <p
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login Here
              </p>
            </span>
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

export default ForgotPass;
