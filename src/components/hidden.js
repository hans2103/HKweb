// src/components/hidden.js

import styled from "styled-components";
import Box from './box';

const Component = styled(Box)`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  whitespace: nowrap;
  wordwrap: normal;
`;

const Hidden = ({ children, ...restProps }) => {
  return <Component as="span" {...restProps}>{children}</Component>;
}

/** @component */
export default Hidden;
