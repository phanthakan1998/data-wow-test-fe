import { ReactNode } from "react";
import clsx from "clsx";

interface IDisplayBoxProps {
  title: string;
  value: number;
  icon?: ReactNode;
  bgColor?: string;
  className?: string;
}

export default function DisplayBox({
  title,
  value,
  icon,
  bgColor,
  className,
}: IDisplayBoxProps) {
  return (
    <div
      className={clsx(
        "rounded-xl p-6 sm:p-8 text-white flex flex-col items-center justify-center",
        bgColor,
        className,
      )}
    >
      {icon && <div className="mb-2 sm:mb-3 text-2xl sm:text-3xl">{icon}</div>}

      <p className="text-sm sm:text-base md:text-lg font-medium text-center">
        {title}
      </p>

      <p className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold mt-2 sm:mt-3">
        {value}
      </p>
    </div>
  );
}
