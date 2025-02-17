import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <div className="relative flex items-center transition-colors border rounded-md shadow-sm dark:!border-gray-500 border-input file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
      {props.prepend && (
        <div className="px-2 mr-2 border-r border-input dark:!border-gray-500">
          {props.prepend}
        </div>
      )}
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md bg-transparent px-3 py-1 text-base md:text-sm",
          className,
          "text-black dark:text-white " // or "text-black" based on your requirement
        )}
        ref={ref}
        {...props}
      />
      {props.append && (
        <div className="px-2 ml-2 border-l border-input dark:!border-gray-500">
          {props.append}
        </div>
      )}
    </div>
  );
});
Input.displayName = "Input";

export { Input };
