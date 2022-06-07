import { Alert, IconButton} from "@mui/material";

const InputAlert = () => {
  return (
    <Alert
      action={
        <IconButton
          aria-label="close"
          color="inherit"
          size="small"
        ></IconButton>
      }
      sx={{ mb: 2 }}
    >
      Successful registration!
    </Alert>
  );
};

export default InputAlert;
