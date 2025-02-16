import React, { useState } from "react";
import { EyeOff, Eye } from "lucide-react";

import { cn } from "@/lib/utils"; // Import the utility function for class names

export const InputPassword = React.forwardRef(
  ({ type, className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className="relative flex items-center transition-colors border rounded-md shadow-sm border-input file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
        <input
          ref={ref}
          type={showPassword ? "text" : type}
          {...props}
          className={cn(
            "flex h-9 w-full rounded-md bg-transparent px-3 py-1 text-base  md:text-sm",
            className,
            "text-black dark:text-white" // or "text-black" based on your requirement
          )}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center px-3"
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        )}
      </div>
    );
  }
);

InputPassword.displayName = "InputPassword";
