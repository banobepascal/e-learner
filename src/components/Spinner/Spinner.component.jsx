import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./Spinner.styles.jsx";

const Spinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer>
        <div></div>
        <div></div>
        <div></div>
      </SpinnerContainer>
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default Spinner;
