import { Link } from "@/navigation";
import React from "react";

import { sizes, styles } from "./styles";

interface ButtonProps {
  className?: string;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "text" | "danger" | "outlined";
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge";
  startIcon?: React.ReactNode; // optional icon before text
  endIcon?: React.ReactNode; // optional icon after text
}

function Button({
  className,
  href,
  type = "button",
  onClick,
  variant = "primary",
  size = "medium",
  startIcon,
  endIcon,
  children,
  ...props
}: ButtonProps) {
  const buttonStyle = `button relative inline-flex items-center gap-2 justify-center ${className || ""} ${styles[variant]} ${sizes[size]}`;

  const renderButton = () => (
    <button type={type} className={buttonStyle} onClick={onClick} {...props}>
      {startIcon && startIcon}
      <span>{children}</span>
      {endIcon && endIcon}
    </button>
  );

  const renderLink = () => (
    <Link href={href!} className={buttonStyle} {...props}>
      {startIcon && startIcon}
      <span>{children}</span>
      {endIcon && endIcon}
    </Link>
  );
  return href ? renderLink() : renderButton();
}

export default Button;
