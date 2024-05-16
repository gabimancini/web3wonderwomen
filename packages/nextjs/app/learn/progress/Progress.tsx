import Image from "next/image";
import progressChart from "../../../public/progressChart.svg";

const Progress = () => {
  return (
    <div>
      <Image src={progressChart} alt="Progress Chart" width={300} height={300} />
    </div>
  );
};
export default Progress;
