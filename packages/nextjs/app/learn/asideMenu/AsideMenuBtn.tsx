const AsideMenuBtn = (props: any) => {
  const { value, icon, className } = props;
  const Icon = icon;
  return (
    <button className={className}>
      <Icon />
      {value}
    </button>
  );
};
export default AsideMenuBtn;
