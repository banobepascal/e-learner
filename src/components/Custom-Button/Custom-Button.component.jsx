import React from "react";

import { CustomButtonContainer } from "./Custom-Button.styles";

const CustomButton = ({children}) => {
  return <CustomButtonContainer>{children}</CustomButtonContainer>;
};

export default CustomButton;
