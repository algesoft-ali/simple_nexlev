"use client";
import { useState } from "react";
import TextField from "../form/TextField";
import PrimaryButton from "../shared/PrimaryButton";
import Link from "next/link";
import { useRegisterUserMutation } from "@/lib/features/user/userApi";
import { useRouter } from "next/navigation";
import GoogleLogin from "./GoogleLogin";
import toast from "react-hot-toast";

const RegisterForm = () => {
  // ----- State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
  });

  // ----- Hooks
  const router = useRouter();

  // ----- Mutation
  const [registerApi, { isLoading }] = useRegisterUserMutation();

  // ----- Handlers
  const handleChangeInput = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    const inputData = {
      name: `${formData?.firstName} ${formData?.lastName}`,
      email: formData?.email,
      password: formData?.password,
      address: formData?.address,
    };
    const registerResult = await registerApi(inputData);
    if ("error" in registerResult) {
      // @ts-ignore
      toast.error(registerResult?.error?.data?.message);
      return;
    }
    router.push("/");
  };

  return (
    <div className="w-full md:w-[600px]">
      <h1 className="text-center text-4xl md:text-6xl mb-5 font-semibold text-primary">
        Create an account
      </h1>

      <div className="flex flex-col gap-6 w-full mt-16">
        <div className="flex items-center gap-4">
          <TextField
            name="firstName"
            label="First Name"
            placeholder="John"
            onChange={handleChangeInput}
            value={formData?.firstName}
          />
          <TextField
            name="lastName"
            label="Last Name"
            placeholder="Doe"
            onChange={handleChangeInput}
            value={formData?.lastName}
          />
        </div>

        <TextField
          type="email"
          name="email"
          label="Email address"
          placeholder="Enter your email address"
          onChange={handleChangeInput}
          value={formData?.email}
        />
        <TextField
          type="password"
          name="password"
          label="Password"
          placeholder="Choose a strong password"
          onChange={handleChangeInput}
          value={formData?.password}
        />
        <TextField
          name="address"
          label="Address"
          placeholder="eg: #123, Street Name, City, Country"
          onChange={handleChangeInput}
          value={formData?.address}
        />

        <PrimaryButton
          className="w-full"
          onClick={handleSubmit}
          disabled={!formData?.email || !formData?.password || isLoading}
        >
          Register
        </PrimaryButton>
      </div>

      <p className="text-neutral-800 font-medium mt-6 text-center">
        Already have an account?{" "}
        <Link href="/login" className="text-primary underline">
          Login Now
        </Link>
      </p>

      {/* Divider */}
      <div className="flex justify-center items-center mt-6">
        <div className="w-[calc(50%-12px)] h-[1px] bg-neutral-300"></div>
        <p className="text-neutral-500 font-medium mx-4">or</p>
        <div className="w-[calc(50%-12px)] h-[1px] bg-neutral-300"></div>
      </div>

      <GoogleLogin />
    </div>
  );
};

export default RegisterForm;
