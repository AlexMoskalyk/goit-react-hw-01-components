import React from "react";
import userData from "../../data/user.json";
import UserDescription from "./userDescription/UserDescription";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <>
      <div className={styles.profileContainer}>
        <UserDescription userData={userData} />
      </div>
    </>
  );
};

export default Profile;
