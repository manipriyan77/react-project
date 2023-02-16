import { useState } from "react";
import DropDown from "./components/DropDown";

const App = () => {
  const [select, setSelect] = useState(null);

  const handleSelect = (option) => {
    setSelect(option);
  };

  console.log(select);

  const options = [
    {
      label: "Red",
      value: "red",
    },
    {
      label: "Blue",
      value: "blue",
    },
    {
      label: "Green",
      value: "green",
    },
    {
      label: "Yellow",
      value: "yellow",
    },
  ];
  return (
    <div>
      <DropDown options={options} select={select} onSelect={handleSelect} />
    </div>
  );
};

export default App;
