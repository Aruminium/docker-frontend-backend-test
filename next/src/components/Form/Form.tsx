import { useState } from "react";
import type { NextPage } from "next";
import FormValidation from "models/FormValidation";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Container, Stack, TextField, Collapse } from "@mui/material";
import SuccessAlert from "components/Form/SuccessAlert";
import ErrorAlert from "components/Form/ErrorAlert";
import { ErrorOutline } from "@mui/icons-material";

const Form = () => {
  const [open, setOpen] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValidation>();

  const onSubmit: SubmitHandler<FormValidation> = (data) => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
    console.log(data);
  };

  return (
    <Container maxWidth="sm" sx={{ pt: 5 }}>
      <Stack spacing={3}>
        <TextField
          required
          label="userName"
          {...register("userName", { required: true, maxLength: 30 })}
        />
        {errors.userName && (
          <ErrorAlert
            errElement={"userName"}
            errMsg={"Please enter between 1 and 30 characters"}
          />
        )}
        <TextField
          required
          label="age"
        {...register("age", { required: true, min: 0, pattern: /^\d{1,3}$/})}
        />
        {errors.age && (
          <ErrorAlert
            errElement={"age"}
            errMsg={"Please enter an integer value greater than or equal to 0"}
          />
        )}
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={handleSubmit(onSubmit)}
        >
          regist
        </Button>
        <Collapse in={open}>
          <SuccessAlert />
        </Collapse>
      </Stack>
    </Container>
  );
};

export default Form;
