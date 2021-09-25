import React from "react";
import Stats from "./stats/Stats";
import PropTypes from "prop-types";
import styles from "./UserDescription.module.css";

const UserDescription = ({
  userData: { avatar, name, tag, location, stats },
}) => {
  return (
    <>
      <div className={styles.usertContainer}>
        <img src={avatar} alt={name} className={styles.userPhoto} />
        <p className={styles.userName}>{name}</p>
        <p className={styles.userTag}>{tag}</p>
        <p className={styles.userLocation}>{location}</p>
      </div>
      <div className={styles.statsListContainer}>
        <ul className={styles.statsList}>
          {Object.entries(stats).map((stat) => (
            <Stats stat={stat} key={stat[0]} />
          ))}
        </ul>
      </div>
    </>
  );
};

UserDescription.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  location: PropTypes.string,
  tag: PropTypes.string,
  stats: PropTypes.object,
};

export default UserDescription;
