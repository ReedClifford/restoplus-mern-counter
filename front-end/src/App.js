import axios from "axios";
import { useEffect, useState } from "react";
import { BiReset } from "react-icons/bi";
import { FiMinus } from "react-icons/fi";
import { IoAddSharp } from "react-icons/io5";
import Button from "./components/Button";
import CounterCointainer from "./components/CounterContainer";

const App = () => {
  const [count, setCount] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:4001/api/counter");

      const { currentCount } = data[0];
      setIsLoading(!isLoading);
      setCount(currentCount);
    };
    fetchData();
  }, [count]);

  const incrementCount = async () => {
    const { currentCount } = await axios.patch(
      "http://localhost:4001/api/counter/increment/63bcfd27e5eb348adc84c67f"
    );
    setCount(currentCount);
  };

  const decrementCount = async () => {
    const { currentCount } = await axios.patch(
      "http://localhost:4001/api/counter/decrement/63bcfd27e5eb348adc84c67f"
    );
    setCount(currentCount);
  };
  const resetCount = async () => {
    const { currentCount } = await axios.patch(
      "http://localhost:4001/api/counter/reset/63bcfd27e5eb348adc84c67f"
    );
    setCount(currentCount);
  };

  return (
    <section className="mainContainer">
      <div className="counterBody">
        <CounterCointainer count={count} isLoading={isLoading} />
        <div className="flex items-center gap-3">
          <Button className=" buttons" onClick={() => decrementCount()}>
            <FiMinus />
          </Button>
          <Button className=" buttons" onClick={() => resetCount()}>
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
