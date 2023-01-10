import { DiMongodb, DiReact } from "react-icons/di";
import { IoLogoNodejs } from "react-icons/io";
import { SiExpress } from "react-icons/si";

const CounterCointainer = ({ count }) => {
  return (
    <div className="flex flex-col  justify-center items-center gap-1 px-4 py-2">
      <h2 className="text-xl">Mern Counter</h2>
      <div className="flex items-center gap-2">
        <DiMongodb className=" text-xl" />
        <SiExpress className=" text-xl" />
        <DiReact className=" text-xl" />
        <IoLogoNodejs className=" text-xl" />
      </div>
      <h2 className="text-2xl ">Current Count</h2>
      <h1 className="text-8xl mx-auto">{count}</h1>
    </div>
  );
};

export default CounterCointainer;
