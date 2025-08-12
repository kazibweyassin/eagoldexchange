import * as React from "react";
import { cn } from "@/lib/utils";

interface GoldCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "premium" | "featured";
}

export const GoldCard = React.forwardRef<HTMLDivElement, GoldCardProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-200",
          variant === "premium" && 
            "border-yellow-300 bg-gradient-to-br from-yellow-50 to-white",
          variant === "featured" && 
            "border-yellow-500 bg-gradient-to-br from-yellow-100 to-white shadow-lg shadow-yellow-100/50",
          className
        )}
        {...props}
      />
    );
  }
);
GoldCard.displayName = "GoldCard";

export const GoldCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
GoldCardHeader.displayName = "GoldCardHeader";

export const GoldCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
GoldCardTitle.displayName = "GoldCardTitle";

export const GoldCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
GoldCardDescription.displayName = "GoldCardDescription";

export const GoldCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
GoldCardContent.displayName = "GoldCardContent";

export const GoldCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
GoldCardFooter.displayName = "GoldCardFooter";

export const GoldCardBadge: React.FC<{
  type: "new" | "featured" | "premium";
  className?: string;
}> = ({ type, className }) => {
  const styles = {
    new: "bg-green-100 text-green-800 border-green-200",
    featured: "bg-blue-100 text-blue-800 border-blue-200",
    premium: "bg-yellow-100 text-yellow-800 border-yellow-200",
  };

  return (
    <div
      className={cn(
        "absolute top-4 right-4 px-2 py-1 text-xs font-medium rounded-full border",
        styles[type],
        className
      )}
    >
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </div>
  );
};
