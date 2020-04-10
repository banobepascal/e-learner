import React from "react";

import { CustomButtonContainer } from "./Custom-Button.styles";

const CustomButton = ({children, ...props}) => {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
};

export default CustomButton;
