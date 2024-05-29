interface LogrosTitleProps {
  icon: React.ReactNode;
  title: string;
}
export default function LogrosTitle(props: LogrosTitleProps) {
  return (
    <h4 className="flex text-h4 items-center border-b-[1px] border-lightGrey pb-2">
      {props.icon}
      <span className="ml-2 text-grey">{props.title}</span>
    </h4>
  );
}
