import React from "react";
import className from "classnames";

// const finalClassName = className("py-2", "py-1.5", "bg-blue-500");
// const finalClassName = className({
//   "bg-blue-500": true,
//   "py-2": false,
// });

// console.log(finalClassName);

const Button = ({
  children,
  success,
  primary,
  secondary,
  danger,
  warning,
  outline,
  rounded,
  ...rest
}) => {
  console.log(rest);

  const classes = className(rest.className, "flex items-center px-3 py-1.5 border", {
    "border-blue-500 bg-blue-500 text-white": primary,
    "border-gray-900 bg-gray-900 text-white": secondary,
    "border-green-500 bg-green-500 text-white": success,
    "border-yellow-400 bg-yellow-500 text-white": warning,
    "border-red-500 bg-red-500 text-white": danger,
    "rounded-full": rounded,
    "bg-white": outline,
    "text-blue-500": outline && primary,
    "text-gray-900": outline && secondary,
    "text-green-500": outline && success,
    "text-yellow-400": outline && warning,
    "text-red-500": outline && danger,
  });

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

// Button.propTypes = {
//   checkVariationValues: ({ success, primary, secondary, danger, warning }) => {
//     const count =
//       Number(!!primary) +
//       Number(!!success) +
//       Number(!!secondary) +
//       Number(!!warning) +
//       Number(!!danger);

//     if (count > 1) {
//       return new Error("Select only one prop");
//     }
//   },
// };

export default Button;
