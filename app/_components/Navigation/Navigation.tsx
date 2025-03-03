import Link from "next/link";
import React from "react";

const Navigation = ({
  title,
  to,
  className,
}: {
  title: string;
  to: string;
  className?: string;
}) => {
  return (
    <Link className={className} href={to}>
      <span className="text-nowrap">{title}</span>
    </Link>
  );
};

export default Navigation;
