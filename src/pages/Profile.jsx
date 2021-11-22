import React from "react";
import { HeaderUser } from "../components/global/";
import { ProfileForm } from "../components/profile/";

const Profile = () => {
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
