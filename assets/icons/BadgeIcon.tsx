import { IIconProps } from "@/interfaces/components";

export default function BadgeIcon({ size = 24, className }: IIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M19.9997 24.9993C26.443 24.9993 31.6663 19.776 31.6663 13.3327C31.6663 6.88936 26.443 1.66602 19.9997 1.66602C13.5564 1.66602 8.33301 6.88936 8.33301 13.3327C8.33301 19.776 13.5564 24.9993 19.9997 24.9993Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.6837 23.1495L11.667 38.3328L20.0003 33.3328L28.3337 38.3328L26.317 23.1328"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
