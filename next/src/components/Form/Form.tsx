import { useState } from "react";
import type { NextPage } from "next";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Button,
  Container,
  Stack,
  TextField,
  Collapse,
} from "@mui/material";
import InputAlert from "components/Form/InputAlert";
import FormInput from "models/FormInput";

const Form = () => {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
    console.log(data);
  };

  return (
    <Container maxWidth="sm" sx={{ pt: 5 }}>
      <Stack spacing={3}>
        <TextField required label="userName" {...register("userName")} />
        <TextField required label="age" {...register("age")} />
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={handleSubmit(onSubmit)}
        >
          RegisT
        </Button>
        <Collapse in={open}>
          <InputAlert />
        </Collapse>
      </Stack>
    </Container>
  );
};

export default Form;
