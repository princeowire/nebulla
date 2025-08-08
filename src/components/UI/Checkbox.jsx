import React from "react"
import "./customcheckbox.css"

export const Checkbox = React.forwardRef(
  ({ checked, onCheckedChange, ...props }, ref) => {
    return (
      <input
        type="checkbox"
        ref={ref}
        className="custom-checkbox"
        checked={checked}
        onChange={(e) => onCheckedChange?.(e.target.checked)}
        {...props}
      />
    )
  }
)

Checkbox.displayName = "Checkbox"
