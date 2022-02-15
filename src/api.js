import axios from "axios";
import { useEffect } from "react";
import { getUserData } from "./redux/action";
import { useDispatch, useSelector } from "react-redux";

const API = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=2").then((res) => {
      dispatch(getUserData(res.data.data));
    });
  }, []);

  const userData = useSelector((state) => state.users);
  console.log(userData);
  return (
    <>
      <h1>API</h1>
      <div className="container">
        <div className="row">
          {userData.length > 0
            ? userData.map((user) => (
                <div className="col-sm-3 col-md-4 card" key={user.id}>
                  <img
                    className="img-thumbnail"
                    style={{ height: "300px" }}
                    src={user.avatar}
                    alt="img"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <p>{user.email}</p>
                    <p>{user.first_name}</p>
                    <p>{user.last_name}</p>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
};

export default API;
