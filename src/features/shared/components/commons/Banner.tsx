import { Skeleton } from "@/features/shared/components/ui/skeleton";
import React, { memo } from "react";

interface BannerProps {
  imageUrl?: string;
  children?: React.ReactNode;
}

const Banner: React.FC<BannerProps> = memo(({ imageUrl, children }) => {
  if (!imageUrl) {
    return (
      <div className="relative w-full h-[40rem]">
        <Skeleton className="w-full h-full object-cover" />
      </div>
    );
  }

  return (
    <div className="relative w-full h-[40rem] shadow">
      <img
        src={imageUrl}
        alt="profile banner"
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-transparent to-black" />
      {!!children && children}
    </div>
  );
});

export default Banner;
