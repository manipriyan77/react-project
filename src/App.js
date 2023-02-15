import DropDown from "./components/DropDown";

const App = () => {
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
      <DropDown options={options} />
    </div>
  );
};

export default App;
