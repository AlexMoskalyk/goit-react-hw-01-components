import React from "react";
import TransactionItem from "./transactionItem/TransactionItem";
import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ transactionData }) => {
  return (
    <table className={styles.container}>
      <thead>
        <tr>
          <th>{"Type"}</th>
          <th>{"Amount"}</th>
          <th>{"Currency"}</th>
        </tr>
      </thead>
      <tbody>
        {transactionData.map((transaction) => (
          <TransactionItem transaction={transaction} key={transaction.id} />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactionData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TransactionHistory;
