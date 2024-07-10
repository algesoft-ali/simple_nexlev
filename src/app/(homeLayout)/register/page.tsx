import AuthContainer from "@/components/auth/AuthContainer";
import RegisterForm from "@/components/auth/RegisterForm";

export const metadata = {
  title: "Register - Simple NexLev",
};

const RegisterPage = () => {
  return (
    <AuthContainer>
      <RegisterForm />
    </AuthContainer>
  );
};

export default RegisterPage;
