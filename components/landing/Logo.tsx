import { Trees, Terminal } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "side-by-side" | "icon-pair" | "header";
  size?: number;
  icons?: [React.ReactNode, React.ReactNode];
  className?: string;
  background?: string;
  showTitle?: boolean;
  titleClassName?: string;
}

export const Logo = ({
  variant = "side-by-side",
  size = 120,
  icons,
  className,
  background = "bg-gradient-to-r from-primaryBlue to-emeraldGreen",
  showTitle = true,
  titleClassName = "text-2xl font-bold text-gray-900",
}: LogoProps) => {
  const [Icon1, Icon2] = icons || [
    <Trees key="trees" />,
    <Terminal key="term" />,
  ];

  return (
    <div className={`inline-flex items-center ${className}`}>
      {/* Logo graphic */}
      <div
        className={variant === "header" ? "flex items-center space-x-2" : ""}
      >
        {variant === "side-by-side" ? (
          <div
            className={`inline-flex items-center justify-center p-4 rounded-xl ${background}`}
            style={{
              width: `${size * 1.5}px`,
              height: `${size}px`,
            }}
          >
            {React.cloneElement(Icon1 as React.ReactElement, {
              size: size * 0.6,
              className: "text-white",
            })}
            {React.cloneElement(Icon2 as React.ReactElement, {
              size: size * 0.4,
              className: "text-white ml-4",
            })}
          </div>
        ) : variant === "icon-pair" ? (
          <div className="p-4 rounded-lg bg-lightBackground">
            <div className="flex items-center">
              {React.cloneElement(Icon1 as React.ReactElement, {
                size: size * 0.6,
                className: "text-primaryBlue",
              })}
              {React.cloneElement(Icon2 as React.ReactElement, {
                size: size * 0.4,
                className: "text-emeraldGreen ml-2",
              })}
            </div>
          </div>
        ) : (
          // Header variant
          <>
            {React.cloneElement(Icon1 as React.ReactElement, {
              size: size * 0.8,
              className: "text-emerald-600",
            })}
            {React.cloneElement(Icon2 as React.ReactElement, {
              size: size * 0.6,
              className: "text-primaryBlue ml-1",
            })}
          </>
        )}
      </div>

      {/* App title - only shown in header variant */}
      {showTitle && variant === "header" && (
        <>
          <span
            className={cn(
              titleClassName,
              "md:block hidden ml-2 text-lg font-semibold",
            )}
          >
            TreeToScript
          </span>
          <span
            className={cn(
              titleClassName,
              "md:hidden ml-2 text-lg font-semibold",
            )}
          >
            T2S
          </span>
        </>
      )}
    </div>
  );
};
