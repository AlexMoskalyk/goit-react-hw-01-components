import React from "react";
import PropTypes from "prop-types";
import styles from "./Stats.module.css";

const Stats = ({ stat }) => {
  return (
    <>
      <li className={styles.statItem}>
        <span className={styles.statItemName}>{stat[0]}</span>
        <span className={styles.statItemValue}>{stat[1]}</span>
      </li>
    </>
  );
};

Stats.propTypes = {
  stat: PropTypes.array.isRequired,
};

export default Stats;
