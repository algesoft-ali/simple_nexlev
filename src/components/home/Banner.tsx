import Image from "next/image";
import PrimaryButton from "../shared/PrimaryButton";
import SecondaryButton from "../shared/SecondaryButton";

const Banner = () => {
  return (
    <div className="container py-20 min-h-[700px] flex items-center justify-between">
      {/* Left */}
      <div>
        <h1 className="text-4xl md:text-7xl font-semibold !leading-tight">
          Discover <br className="hidden md:block" />
          <span className="gradient-text">
            Winning
            <br className="md:hidden" /> Niches{" "}
          </span>
          <br className="hidden md:block" />
          on YouTube
        </h1>

        <h2 className="max-w-lg mt-6 mb-12 text-lg text-neutral-600">
          Find and monitor YouTube channels and keywords to gain insights into
          their growth, strategy and revenue.
        </h2>

        <div className="flex items-center gap-2 md:gap-4">
          <PrimaryButton className="w-full">Find Your Niche</PrimaryButton>
          <SecondaryButton className="w-full">
            <Image
              src="/images/chrome.svg"
              alt="chrome"
              width={24}
              height={24}
            />
            <span>Install extension</span>
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
