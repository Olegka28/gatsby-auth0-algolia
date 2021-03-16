import React from "react";

const Home = ({ user }) => {
  return (
    <div>
      <p>Hi, {user.name ? user.name : "friend"}!</p>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default Home;
