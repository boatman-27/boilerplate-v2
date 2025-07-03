import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UseUser } from "../../../Context/UserContext";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import type { LoginData } from "../../../@types/APIModels";

import { login } from "../../../services/apiUser";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { dispatch } = UseUser();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    clearErrors,
  } = useForm<LoginData>();

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: LoginData) => {
      const { email, password } = data;
      return login(email, password);
    },
    mutationKey: ["login"],
    onSuccess: (data) => {
      if (data.accessToken) {
        dispatch({
          type: "Login",
          payload: data,
        });
        toast.success("Login successful!");
        queryClient.invalidateQueries({ queryKey: ["accountStatus"] });
        navigate("/");
        reset();
      }
    },
    onError: (error: Error) => {
      toast.error(error.message || "Login failed. Please try again.");
    },
  });

  const onSubmit = (data: LoginData) => {
    clearErrors();
    mutate(data);
  };

  const onError = (errors: Record<string, { message?: string }>) => {
    Object.values(errors).forEach((error) => {
      if (error?.message) {
        toast.error(error.message);
      }
    });
  };

  return (
    <LoginForm
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      onError={onError}
      register={register}
      errors={errors}
      isLoading={isPending}
    />
  );
};

export default LoginPage;
