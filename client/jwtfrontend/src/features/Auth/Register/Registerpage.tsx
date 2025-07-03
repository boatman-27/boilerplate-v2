import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UseUser } from "../../../Context/UserContext";
import { useForm } from "react-hook-form";
import type { UserInitialState } from "../../../@types/UserModels.ts";
import toast from "react-hot-toast";
import type { RegisterData } from "../../../@types/APIModels";
import { signup } from "../../../services/apiUser";
import RegisterForm from "./RegisterForm";
import { useNavigate } from "react-router-dom";

const Registerpage: React.FC = () => {
  const queryClient = useQueryClient();
  const { dispatch } = UseUser();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    clearErrors,
    watch,
  } = useForm<RegisterData>();

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: RegisterData) => {
      return signup(data);
    },
    mutationKey: ["login"],
    onSuccess: (data) => {
      if (data.accessToken) {
        dispatch({
          type: "Login",
          payload: data,
        });
        toast.success("Registeration successful!");
        queryClient.invalidateQueries({ queryKey: ["accountStatus"] });
        navigate("/");
        reset();
      }
    },
    onError: (error: Error) => {
      toast.error(error.message || "Login failed. Please try again.");
    },
  });

  const onSubmit = (data: RegisterData) => {
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
    <RegisterForm
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      onError={onError}
      register={register}
      errors={errors}
      isLoading={isPending}
      watch={watch}
    />
  );
};

export default Registerpage;
