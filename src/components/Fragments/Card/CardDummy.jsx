import React from "react";

const Card = React.forwardRef(({ className = "", children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`rounded-lg border-2 bg-white shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});

const CardContent = React.forwardRef(
  ({ className = "", children, ...props }, ref) => {
    return (
      <div ref={ref} className={`md:p-6 ${className}`} {...props}>
        {children}
      </div>
    );
  },
);

// Add display names for better debugging
Card.displayName = "Card";
CardContent.displayName = "CardContent";

export { Card, CardContent };
