import { BsFile } from "react-icons/bs";

interface TitleProps {
  num: string;
  subTitle: string;
  className:string
}
const ModuleTitle = (props: TitleProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { num, subTitle, className } = props;
  return (
    <div className={className}>
      <h4>{`Módulo ${num} text-white`}</h4>
      <p>{subTitle}</p>
      <div>
      <button>
        <BsFile /> GUÍA TEÓRICA
      </button>
      </div>
    </div>
  );
};
export default ModuleTitle;
