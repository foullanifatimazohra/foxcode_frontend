import { Link } from "@/navigation";
import React from "react";

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

const styles = {
  primary:
    "bg-primary-brand-500 hover:bg-primary-brand-700 text-white border border-transparent",
  secondary:
    "bg-primary-brand-50 text-primary-brand-700 hover:bg-primary-brand-100 border border-transparent",
  danger:
    "text-white bg-primary-error-600 hover:bg-primary-error-700 border border-transparent",
  outlined:
    "border bg-white text-primary-gray-700 hover:bg-primary-gray-50 border border-primary-gray-300",
  text: "bg-white text-primary-gray-600 hover:text-primary-gray-700 border-none",
};

const sizes = {
  xsmall: "text-sm px-3.5 py-2 rounded-[66px]",
  small: "text-sm px-4 py-2.5 rounded-[66px]",
  medium: "text-base font-medium px-[18px] py-2.5 rounded-[66px]",
  large: "text-base font-medium px-5 py-3 rounded-[66px]",
  xlarge: "text-lg font-semibold px-[28px] py-4 rounded-[66px]",
};

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
  const buttonStyle = `button relative inline-flex items-center gap-6 justify-center ${className || ""} ${styles[variant]} ${sizes[size]}`;

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
