import React from "react";

import { HeaderTitle } from "./Header-Img.styles";

const HeaderImg = ({ children, ...props }) => {
  return <HeaderTitle {...props}> {children}</HeaderTitle>;
};

export default HeaderImg;
