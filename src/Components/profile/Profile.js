import React from "react";

import UserDescription from "./userDescription/UserDescription";
import styles from "./Profile.module.css";

const Profile = ({ userData }) => {
  return (
    <>
      <div className={styles.profileContainer}>
        <UserDescription userData={userData} />
      </div>
    </>
  );
};

export default Profile;
