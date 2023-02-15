import React, { useState } from "react";

const DropDown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const renderedOptions = options.map((option) => {
    return <div key={option.value}>{option.label}</div>;
  });

  console.log(options);
  return (
    <div>
      <div onClick={handleClick}>Select....</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
};

export default DropDown;
