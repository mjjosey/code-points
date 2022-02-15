import { useState, useEffect } from "react";

const defaultData = {
  name: "",
  email: "",
  dob: "",
  gender: "",
  country: "",
  about: "",
};
const Form = () => {
  const [userData, setUserData] = useState(defaultData);
  const [userList, setUserList] = useState([]);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(userData));
    if (formErrors.length === 0) {
      setUserList([...userList, userData]);
      setUserData(defaultData);
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!userData.name) {
      errors.name = "Name is required!";
    }
    if (!userData.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(userData.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!userData.dob) {
      errors.dob = "Date of birth is required";
    }
    if (!userData.gender) {
      errors.gender = "select the gender";
    }
    if (!userData.country) {
      errors.country = "select the country";
    }

    return errors;
  };

  const handleUser = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({
      ...userData,
      [name]: value,
    });
  };
  console.log(userData);
  console.log(userList);
  return (
    <>
      <form className="container mt-3">
        <div className="mb-3 row">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={userData.name}
              onChange={handleUser}
            />
          </div>
          {formErrors.name && <p className="text-danger">{formErrors.name}</p>}
        </div>
        <div className="mb-3 row">
          <label htmlFor="email" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleUser}
            />
          </div>
          {formErrors.email && (
            <p className="text-danger">{formErrors.email}</p>
          )}
        </div>
        <div className="mb-3 row">
          <label htmlFor="dob" className="col-sm-2 col-form-label">
            DOB
          </label>
          <div className="col-sm-10">
            <input
              type="date"
              className="form-control"
              id="dob"
              name="dob"
              value={userData.dob}
              onChange={handleUser}
            />
          </div>
          {formErrors.dob && <p className="text-danger">{formErrors.dob}</p>}
        </div>
        <div className="mb-3 row">
          <label htmlFor="gender" className="col-sm-2 col-form-label">
            Gender
          </label>
          <div className="col-sm-6">
            <div className="row">
              <div className="form-check col-sm-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  checked={userData.gender === "male"}
                  onChange={handleUser}
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>
              <div className="form-check col-sm-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  checked={userData.gender === "female"}
                  onChange={handleUser}
                />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>
            </div>
          </div>
          {formErrors.gender && (
            <p className="text-danger">{formErrors.gender}</p>
          )}
        </div>
        <div className="mb-3 row ">
          <label htmlFor="status" className="col-sm-2 col-form-label">
            Country
          </label>
          <div className="col-sm-10">
            <select
              className="form-select"
              name="country"
              id="status"
              value={userData.country}
              onChange={handleUser}
              aria-label="Default select example"
            >
              <option>Select a Country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="Srilanka">Srilanka</option>
            </select>
          </div>
          {formErrors.country && (
            <p className="text-danger">{formErrors.country}</p>
          )}
        </div>
        <div className="mb-3 row">
          <label htmlFor="dob" className="col-sm-2 col-form-label">
            About
          </label>
          <div className="col-sm-10">
            <textarea
              className="form-control"
              aria-label="With textarea"
              name="about"
              value={userData.about}
              onChange={handleUser}
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
