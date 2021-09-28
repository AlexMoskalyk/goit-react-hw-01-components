import React from "react";
import PropTypes from "prop-types";

const TransactionItem = ({ transaction: { type, amount, currency } }) => {
  return (
    <>
      <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </>
  );
};

TransactionItem.propTypes = {
  transaction: PropTypes.object.isRequired,
};

// TransactionItem.propTypes = {
//   type: PropTypes.string,
//   amount: PropTypes.string,
//   currency: PropTypes.string,
// };

export default TransactionItem;
