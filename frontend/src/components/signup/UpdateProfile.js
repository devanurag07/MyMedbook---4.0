import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const UpdateProfile = ({ setSignUpForm }) => {
  const user = useSelector((state) => state.Auth.user);
  useEffect(() => {
    if (user) {
      if (user.first_name == "" && user.last_name == "") {
        setSignUpForm(true);
      }
    }
  }, [user]);
  return <div></div>;
};

export default UpdateProfile;
