import React from "react";
import { Link } from "react-router-dom";

interface LinkProps {
  icon?: React.ReactNode;
  goTo: string;
  text: string;
}

export default function CustomLink({ icon, goTo, text }: LinkProps) {
  return (
    <Link
      to={goTo}
      className="flex justify-between items-center px-1 hover:bg-neutral-100 hover:rounded-sm"
    >
      {icon}
      {text && <span className="ml-1">{text}</span>}
    </Link>
  );
}
