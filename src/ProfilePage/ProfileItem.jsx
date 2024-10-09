import React from "react";
import "./Profile.css";

const ProfileItem = () => {
  return (
    <div className="form-container">
      <img
        src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Form Header"
        className="form-image"
      />
      <form>
        <div>
        <input type="text" placeholder="Jhane" className="input-field" />
        <input type="text" placeholder="Doe" className="input-field" />
        <input
          type="email"
          placeholder="jhanedoe@tbcx.com"
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
