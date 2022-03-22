import {DefaultTheme} from "styled-components"

import { colors } from "./colors";
import { primaryFont, typeScale } from "./typography";
import { breakpoints } from "./breakpoints";

const theme: DefaultTheme = {
  colors,
  primaryFont,
  typeScale,
  breakpoints,
};

export * from "./colors";
export * from "./typography";
export * from "./breakpoints";
export default theme;
