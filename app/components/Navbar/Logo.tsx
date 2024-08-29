"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { RiHotelFill } from "react-icons/ri";

const Logo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="flex items-center cursor-pointer"
    >
      <RiHotelFill size={34} />
      <span className="travella">HOTEL ADRIAN</span>
    </div>
  );
};

export default Logo;
