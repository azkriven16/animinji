import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const cleanHtmlTags = (text: string | any) => {
  if (typeof text === "string") {
    return text.replace(/<[^>]*>/g, "");
  } else {
    return (
      text.userPreferred.replace(/<[^>]*>/g, "") ||
      text.romaji.replace(/<[^>]*>/g, "") ||
      ""
    );
  }
};

export const skeletonArray = new Array(20).fill(null);
