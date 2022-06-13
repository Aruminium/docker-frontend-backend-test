import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import ErrorProps from "models/ErrorProps";

const ErrorAlert= (props: ErrorProps) => {
  return (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      <strong>{props.errElement}</strong> - {props.errMsg}
    </Alert>
  );
};

export default ErrorAlert;
