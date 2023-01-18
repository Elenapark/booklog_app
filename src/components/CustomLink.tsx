import { ReactNode } from "react";
import { Link } from "react-router-dom";
import cx from "classnames";

interface LinkProps {
  icon?: ReactNode;
  goTo: string;
  text: string;
  type?: "normal" | "needStatus";
  data?: any[];
}

export default function CustomLink({
  icon,
  goTo,
  text,
  type = "normal",
  data,
}: LinkProps) {
  return (
    <Link
      to={goTo}
      className="flex justify-between items-center px-1 hover:bg-neutral-100 hover:rounded-sm"
    >
      <div className={`text-2xl ${cx(type === "needStatus" && "relative")}`}>
        {icon}
        {type === "needStatus" && data?.length !== 0 && (
          <div className="absolute w-4 text-xs -top-1 -right-1 rounded-full bg-orange-100 text-center">
            {data?.length}
          </div>
        )}
      </div>

      {text && <span className="hidden sm:block sm:ml-1">{text}</span>}
    </Link>
  );
}
