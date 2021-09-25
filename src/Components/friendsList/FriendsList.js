import React from "react";
import PropTypes from "prop-types";
import FriendsListItem from "./friendsListItem/FriendsListItem";
import styles from "./FriendsList.module.css";

const FriendsList = ({ friendsData }) => {
  return (
    <ul className={styles.list}>
      {friendsData.map((friend) => (
        <FriendsListItem friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  friendsData: PropTypes.array.isRequired,
};

export default FriendsList;
