import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const Statistics = ({ statisticsData, title }) => {
  return (
    <>
      <div className={styles.statisticsContainer}>
        {title && <h2 className={styles.statisticsTitle}>{title}</h2>}
        <ul className={styles.statisticsList}>
          {statisticsData.map((item) => (
            <li key={item.id} className={styles.statisticsItem}>
              <span className={styles.statisticsLabel}>{item.label}</span>
              <span className={styles.statisticsPercentage}>
                {item.percentage}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

Statistics.propTypes = {
  statisticsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
};
export default Statistics;
