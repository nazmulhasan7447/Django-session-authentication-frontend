import { useEffect, useState } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";
import Cookies from "js-cookie";
import BASE_URL from "./BaseURL";

const Register = () => {
  // const csrftoken = Cookies.get("csrftoken");
  //   const { enqueueSnackbar } = useSnackbar();
  //   const authValues = useAuth();

  const navigate = useNavigate();

  const initialCredentials = Object.freeze({
    email: "",
    username: "",
    password: "",
    confirmPass: "",
  });

  const [userInformation, setUserInformation] = useState(initialCredentials);

  const onChangeHandler = (e) => {
    setUserInformation({ ...userInformation, [e.target.name]: e.target.value });
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    fetch(`${BASE_URL}/api/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      credentials: "include",
      body: JSON.stringify(userInformation),
    })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="login-form mt-5">
            <form onSubmit={(e) => handleRegistration(e)}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  name="email"
                  onChange={onChangeHandler}
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Username"
                  name="username"
                  onChange={onChangeHandler}
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Password"
                  name="password"
                  onChange={onChangeHandler}
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Confirm password"
                  name="confirmPass"
                  onChange={onChangeHandler}
                />
              </div>

              <div className="mb-3">
                <button type="submit" class="btn form-control btn-primary mb-3">
                  Register
                </button>
              </div>
            </form>

            <p>
              Already have account?{" "}
              <Link to="/">
                <strong>Login</strong>
              </Link>{" "}
              here
            </p>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default Register;
