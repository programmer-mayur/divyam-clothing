import React from "react";

import "./homepage.scss";

import Directory from "../../components/directory/directory";

const HomePage = ({ history }) => (
  <div className="homepage">
    <Directory history={history} />
  </div>
);

export default HomePage;
