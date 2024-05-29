"use client";

import { usePathname, useRouter } from "next/navigation";

const AsideMenuBtn = (props: any) => {
  const { value, icon, className, fill, href } = props;
  const router = useRouter();
  const pathname = usePathname();
  let style = {};
  if (pathname === href) {
    style = {
      marginRight: 10,
      color: "darkOrange",
      backgroundColor: "#F9F5E3",
      borderColor: "darkOrange",
    };
  } else {
    style = {
      marginRight: 10,
      color: "darkGrey ",
      backgroundColor: "#fff",
      borderColor: "darkGrey ",
    };
  }
  console.log("pathname: ", pathname);
  console.log("href: ", href);
  const Icon = icon;
  return (
    <button className={className} style={style} onClick={() => router.push(href)}>
      <Icon fill={fill} className="mr-2" />
      {value}
    </button>
  );
};
export default AsideMenuBtn;
