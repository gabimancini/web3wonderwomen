interface LogrosTitleProps {
  icon: React.ReactNode;
  title: string;
}
export default function LogrosTitle(props: LogrosTitleProps) {
  return (
    <h4 className="flex text-h4">
      {props.icon}
      {props.title}
    </h4>
  );
}
