import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { authenticateUser } from "../store/modules/auth/actions";

export const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: "", password: "" });
  const dispatch = useDispatch();

  const token = useSelector((state) => state.authReducer.token);

  const loginUser = async (e) => {
    e.preventDefault();
    await dispatch(authenticateUser(user));
    // window.location.reload();
    navigate("/");
  };

  const inputHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="login-screen">
      {token ?? ""}
      <form onSubmit={loginUser}>
        <div className="form-group">
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={inputHandler}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="password"
            placeholder="password"
            onChange={inputHandler}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};
