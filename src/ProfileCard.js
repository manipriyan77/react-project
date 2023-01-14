import React from "react";

const Sidebar = ({ items }) => {
  return (
    <ul>
      {items.map((item, i) => {
        return <li key={i}>{item.name}</li>;
      })}
    </ul>
  );
};

export default Sidebar;
