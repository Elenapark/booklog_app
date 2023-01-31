interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  disabled?: boolean;
  bgColor?: string;
}

export default function Button({
  type = "button",
  onClick,
  text,
  bgColor,
  disabled,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${
        bgColor ? bgColor : "bg-neutral-200"
      } p-1 rounded-sm text-sm font-bold min-w-[20px]`}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
