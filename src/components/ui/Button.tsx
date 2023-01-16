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
      className="bg-neutral-200 p-1 rounded-sm text-sm font-bold"
    >
      {text}
    </button>
  );
}
