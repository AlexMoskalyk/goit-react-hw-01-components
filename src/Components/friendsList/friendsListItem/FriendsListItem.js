import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendsListItem.module.css";

const FriendsListItem = ({ friend: { isOnline, avatar, name } }) => {
  return (
    <li className={styles.item}>
      {/* сделать проверку на цвет (онлайн или офлайн) */}
      <span className={isOnline ? styles.isOnline : styles.isOffline}></span>
      <img src={avatar} alt={name} className={styles.avatar} />
      <p>{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  friend: PropTypes.object.isRequired,
};

// FriendsListItem.propTypes = {
//   isOnline: PropTypes.bool,
//   avatar: PropTypes.string,
//   name: PropTypes.string,
// };

export default FriendsListItem;
