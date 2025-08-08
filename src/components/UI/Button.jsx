import React from "react"
import clsx from "clsx"

export const Button = ({
  children,
  className,
  variant = "default",
  size = "md",
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
  const variants = {
    default: "bg-indigo-600 text-white hover:bg-indigo-700",
    ghost: "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800",
    outline: "border border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800",
  }

  const sizes = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-6 text-base",
  }

  return (
    <button
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}
