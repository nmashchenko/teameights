import React from "react";
import {AlertBox} from './Alert.styles'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <AlertBox elevation={7} ref={ref} variant="filled" {...props} />;
});

export default Alert
