import React from "react";
import Profile from "../profile/Profile";
import Statistics from "../statistics/Statistics";
import statisticsData from "../../data/statistical-data.json";
import FriendsList from "../friendsList/FriendsList";
import friendsData from "../../data/friends.json";
import TransactionHistory from "../transactionHistory/TransactionHistory";
import transactionData from "../../data/transactions.json";
import Section from "../section/Section";

const Main = () => {
  return (
    <>
      <Section title="Profile">
        <Profile />
      </Section>
      <Section title="Statistics">
        <Statistics statisticsData={statisticsData} title="Upload stats" />
      </Section>
      <Section title="FriendsList">
        <FriendsList friendsData={friendsData} />
      </Section>
      <Section title="Transaction History">
        <TransactionHistory transactionData={transactionData} />
      </Section>
    </>
  );
};

export default Main;
