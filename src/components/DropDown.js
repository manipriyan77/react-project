import React, { useState } from "react";

const DropDown = ({ options, select, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (valueObj) => {
    setIsOpen((prev) => !prev);
    onSelect(valueObj);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div key={option.value} onClick={() => handleOptionClick(option)}>
        {option.label}
      </div>
    );
  });

  let selected = "Select...";

  if (select) {
    selected = select?.value;
  }
  console.log(selected);
  return (
    <div>
      <div onClick={handleClick}>
        {/* {select?.value ? select.value : "Select"} */}
        {/* {selected} */}
        {select?.label || "Select..."}
      </div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
};

export default DropDown;
