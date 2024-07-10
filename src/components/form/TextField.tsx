import { InputHTMLAttributes } from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const TextField = ({ name, label, className, ...rest }: TextFieldProps) => {
  return (
    <div className={`flex w-full flex-col gap-1 ${className}`}>
      <label htmlFor={name}>
        <span className="font-semibold text-black">{label}</span>
      </label>

      <input
        name={name}
        id={name}
        className="w-full border border-neutral-300 px-4 py-3 rounded-lg outline-none focus:border-primary placeholder:font-light placeholder:text-sm transition-all duration
        "
        {...rest}
      />
    </div>
  );
};

export default TextField;
