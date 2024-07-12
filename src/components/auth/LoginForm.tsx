"use client";
import { useState } from "react";
import TextField from "../form/TextField";
import PrimaryButton from "../shared/PrimaryButton";
import Link from "next/link";
import { useLoginUserMutation } from "@/lib/features/user/userApi";
import { useRouter } from "next/navigation";
import GoogleLogin from "./GoogleLogin";
import toast from "react-hot-toast";

const LoginForm = () => {
  // ----- State
  const [formData, setFormData] = useState({ email: "", password: "" });

  // ----- Hooks
  const router = useRouter();

  // ----- Mutation
  const [loginApi, { isLoading, error }] = useLoginUserMutation();

  // ----- Handlers
  const handleChangeInput = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    const loginResult = await loginApi(formData);
    if ("error" in loginResult) {
      // @ts-ignore
      toast.error(loginResult?.error?.data?.message);
      return;
    }
    router.push("/");
  };

  return (
    <div className="w-full md:w-[600px]">
      <h1 className="text-center text-4xl md:text-6xl mb-5 font-semibold text-primary">
        Welcome back!
      </h1>

      <div className="flex flex-col gap-6 w-full mt-16">
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
          placeholder="********"
          onChange={handleChangeInput}
          value={formData?.password}
        />

        <PrimaryButton
          className="w-full"
          onClick={handleSubmit}
          disabled={!formData?.email || !formData?.password || isLoading}
        >
          {isLoading ? "Loading..." : "Login"}
        </PrimaryButton>
      </div>

      <p className="text-neutral-800 font-medium mt-6 text-center">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-primary underline">
          Register Now
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

export default LoginForm;
