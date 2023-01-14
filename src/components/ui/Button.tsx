interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  text: string;
}

export default function Button({
  type = "button",
  onClick,
  text,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-indigo-500 px-1 rounded-sm text-white ml-2"
    >
      {text}
    </button>
  );
}
