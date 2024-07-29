import { getUserSubscription } from "@/db/queries";
import { cn } from "@/lib/utils";
import { HeartIcon, ZapIcon } from "lucide-react";
import React from "react";

type Props = {
  value: number;
  variant: "points" | "hearts";
  isActive?: boolean;
};
export const ResultCard = ({ value, variant, isActive }: Props) => {
  const Icon = variant === "hearts" ? HeartIcon : ZapIcon;

  return (
    <div
      className={cn(
        "rounded-2xl border-2 w-full",
        variant === "points" && "bg-orange-500 border-orange-500",
        variant === "hearts" && "bg-rose-500 border-rose-500"
      )}
    >
      <div
        className={cn(
          "p-1.5 text-white rounded-t-xl font-bold text-center uppercase text-xs",
          variant === "points" && "bg-orange-500",
          variant === "hearts" && "bg-rose-500"
        )}
      >
        {variant === "points" ? "Total XP" : "Hearts left"}
      </div>
      <div
        className={cn(
          "rounded-2xl bg-white items-center flex justify-center p-6 font-bold text-lg",
          variant === "points" && "text-orange-500",
          variant === "hearts" && "text-rose-500"
        )}
      >
        <Icon
          height={30}
          width={30}
          className="mr-1.5"
          fill={variant === "points" ? "#f97316" : "#f43f5e"}
        />
        {variant === "points" ? value : isActive ? "∞" : value}
      </div>
    </div>
  );
};
