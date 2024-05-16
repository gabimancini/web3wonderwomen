import { BsFileText } from "react-icons/bs";

interface TitleProps {
  num: string;
  subTitle: string;
  className: string;
}
const ModuleTitle = (props: TitleProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { num, subTitle, className } = props;
  return (
    <div className={className}>
      <div>
        <h4>{`Módulo ${num}`}</h4>
        <p className="text-p">{subTitle}</p>
      </div>
      <button className="flex items-center border-solid border-2 border-lightGrey self-center text-sm">
        <BsFileText /> GUÍA TEÓRICA
      </button>
    </div>
  );
};
export default ModuleTitle;
