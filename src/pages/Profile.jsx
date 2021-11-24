import { useState, useEffect } from "react";
import { HeaderUser } from "../components/global/";
import { ProfileForm } from "../components/profile/";
import { getToken } from "../services/AutService";
import { useHistory } from "react-router-dom";

const Profile = () => {
  const history = useHistory();

  useEffect(() => {
    if (!getToken()) {
      history.push("/");
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
