import React from "react";
import "./Profile.css";

const ProfileItem = ({name, surname, email, img}) => {
  return (
    <div className="form-container">
      <img
        src={img}
        alt="Form Header"
        className="form-image"
      />
      <form>
        <div>
        <input type="text" placeholder={name} className="input-field" />
        <input type="text" placeholder={surname}className="input-field" />
        <input
          type="email"
          placeholder={email}
          className="input-field"
        />

        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProfileItem;
