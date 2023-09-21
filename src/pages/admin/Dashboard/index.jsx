import { useEffect, useState } from "react";
import { InputNumber, Button } from "antd";
import { useDispatch } from "react-redux";

import { setTheme } from "../../../redux/slicers/common.slice";

const DashboardPage = () => {
  const [pin1, setPin1] = useState(0);
  const [pin2, setPin2] = useState(0);
  const [pin3, setPin3] = useState(0);
  const [isLock, setIsLock] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Khởi tạo Dashboard");

    return () => {
      console.log("Rời khỏi Dashboard");
    };
  }, []);

  useEffect(() => {
    console.log(pin1, pin2, pin3);
    if (pin1 === 1 && pin2 === 2 && pin3 === 3) {
      setIsLock(false);
    }
  }, [pin1, pin2, pin3]);

  return (
    <div>
      <InputNumber onChange={(value) => setPin1(value)} value={pin1} />
      <InputNumber onChange={(value) => setPin2(value)} value={pin2} />
      <InputNumber onChange={(value) => setPin3(value)} value={pin3} />
      <h1>{isLock ? "Lock" : "Unlock"}</h1>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum aliquam
      distinctio voluptate similique minima adipisci debitis sint, assumenda
      facilis tempora voluptates sed consequatur earum quam ad. Facere sit
      nostrum saepe.
      <Button onClick={() => dispatch(setTheme("dark"))}>Dark</Button>
      <Button onClick={() => dispatch(setTheme("light"))}>Light</Button>
    </div>
  );
};

export default DashboardPage;
