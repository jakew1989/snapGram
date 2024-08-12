import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

export function timeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const secondsAgo = Math.floor((now.getTime() - date.getTime()) / 1000);

  const intervals: { [key: string]: number } = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60,
      second: 1
  };

  for (const interval in intervals) {
      const seconds = intervals[interval];
      const count = Math.floor(secondsAgo / seconds);
      if (count >= 1) {
          return `${count} ${interval}${count !== 1 ? 's' : ''} ago`;
      }
  }
  
  return 'just now';
}




export const checkIsLiked = (likeList: string[], userId: string) => {
  return likeList.includes(userId);
};