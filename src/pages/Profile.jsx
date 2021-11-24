import { useState, useEffect } from "react";
import { HeaderUser } from "../components/global/";
import { ProfileForm } from "../components/profile/";
import { getToken } from "../services/";
import { useHistory } from "react-router-dom";
import { notPresentToken } from "../helpers";

const Profile = () => {
  const history = useHistory();

  useEffect(() => {
    if (!getToken()) {
      notPresentToken();
      history.push("/login");
    }
  }, [getToken()]);
  return (
    
    <>
      <div className="w-screen">
        <HeaderUser />
        <ProfileForm />
      </div>
    </>
  );
};

export default Profile;
