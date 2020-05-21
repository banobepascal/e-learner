import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import BeforeAuthHeader from "./BeforeAuth.component";
import AfterAuthHeader from "./AfterAuthHeader.component";

import { selectCurrentUser } from "../../redux/user/user.selectors";

const Header = ({ currentUser }) => {
  return <div>{currentUser ? <AfterAuthHeader /> : <BeforeAuthHeader />}</div>;
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);
