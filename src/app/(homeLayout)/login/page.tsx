import AuthContainer from "@/components/auth/AuthContainer";
import LoginForm from "@/components/auth/LoginForm";

export const metadata = {
  title: "Login - Simple NexLev",
};

const LoginPage = () => {
  return (
    <AuthContainer>
      <LoginForm />
    </AuthContainer>
  );
};

export default LoginPage;
