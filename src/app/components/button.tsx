
import React from "react";
import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
      className={classNames(
        "px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
