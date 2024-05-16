const AsideMenuBtn = (props: any) => {
  const { value, icon, className, fill } = props;
  const Icon = icon;
  return (
    <button className={className}>
      <Icon fill={fill} />
      {value}
    </button>
  );
};
export default AsideMenuBtn;
