import axios from "axios";
import { useEffect, useState } from "react";
import { BiReset } from "react-icons/bi";
import { FiMinus } from "react-icons/fi";
import { IoAddSharp } from "react-icons/io5";
import Button from "./components/Button";
import CounterCointainer from "./components/CounterContainer";

const App = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:4001/api/counter");

      const { currentCount } = data[0];
      setCount(currentCount);
    };
    fetchData();
  }, []);

  const incrementCount = async () => {
    return await axios.put(
      "http://localhost:4001/api/counter/increment/63bcfd27e5eb348adc84c67f",
      { count }
    );
  };

  return (
    <section className="mainContainer">
      <div className="counterBody">
        <CounterCointainer count={count} />
        <div className="flex items-center gap-3">
          <Button className=" buttons" onClick={() => setCount(count - 1)}>
            <FiMinus />
          </Button>
          <Button className=" buttons" onClick={() => setCount(0)}>
            <BiReset />
          </Button>
          <Button className=" buttons" onClick={() => incrementCount()}>
            <IoAddSharp />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default App;
