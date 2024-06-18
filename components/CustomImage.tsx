import Image from "next/image";
import React from "react";

interface ImagePropsType {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
}

export const CustomImage: React.FC<ImagePropsType> = ({
  src,
  alt,
  width,
  height,
  priority,
}) => {
  return (
    <Image
      className="max-w-[250px] w-full h-[250px]"
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
    />
  );
};
