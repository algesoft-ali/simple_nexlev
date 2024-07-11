import config from "@/config";
import Image from "next/image";

const GoogleLogin = () => {
  const handleClick = () => {
    window.open(`${config.server_url}/user/google`, "_self");
  };
  return (
    <button
      className="w-full mt-4 py-3 flex items-center justify-center gap-4 bg-white border border-neutral-100 rounded-lg duration-200 transition-all text-black hover:text-primary hover:border-primary font-semibold"
      onClick={handleClick}
    >
      <Image src="/images/google.svg" alt="google" width={24} height={24} />
      <span>Continue with Google</span>
    </button>
  );
};

export default GoogleLogin;
