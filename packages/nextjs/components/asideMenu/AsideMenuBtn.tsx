import { useRouter } from "next/navigation";

const AsideMenuBtn = (props: any) => {
  const { value, icon, className, fill, href } = props;
  const router = useRouter();
  const style = {
    marginRight: 10,
    color: router === href ? "red" : "black",
  };

  const Icon = icon;
  return (
    <button className={className} style={style} onClick={() => router.push(`dashboard${href}`)}>
      <Icon fill={fill} className="mr-2" />
      {value}
    </button>
  );
};
export default AsideMenuBtn;
