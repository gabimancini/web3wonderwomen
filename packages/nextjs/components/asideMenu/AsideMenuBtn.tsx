"use client";

import { usePathname, useRouter } from "next/navigation";

const AsideMenuBtn = (props: any) => {
  const { value, icon, fill, href } = props;
  const router = useRouter();
  const pathname = usePathname();

  console.log("pathname: ", pathname);
  console.log("href: ", href);
  const Icon = icon;
  return (
    <button
      className={`
      ${
        pathname === href ? "text-darkOrange bg-lightBeige border-darkOrange" : "text-grey bg-white border-grey"
      }, w-[100%] flex items-center text-darkGrey font-normal rounded-xl border-[1px] border-borderGrey p-2 mb-2
      `}
      onClick={() => router.push(href)}
    >
      <Icon fill={fill} className="mr-2" />
      {value}
    </button>
  );
};
export default AsideMenuBtn;
