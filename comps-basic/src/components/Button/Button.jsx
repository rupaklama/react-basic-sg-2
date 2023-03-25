// 'classnames' - A simple JavaScript utility for conditionally joining classNames together
import classnames from "classnames";

// note - classnames function will output joined strings with empty spaces between
// const finalClassName = classnames("px-3 py-1.5 border");

// note - passing values as object where the key will be use as class names
const finalClassName = classnames("px-1.5", {
  // key wil be conditionally included only when the value is truthy
  "bg-blue-500": true,
  "text-yellow-500": false,
});
// console.log(finalClassName);

const Button = ({ children, primary, secondary, success, warning, danger, outline, rounded, ...rest }) => {
  // note - will be doing same by using External JS library 'classnames' since this can be very tedious
  // let baseClassName = "px-3 py-1.5 border";

  // if (primary) {
  //   baseClassName += "border-blue-500 bg-blue-500 text-white";
  // } else if (secondary) {
  //   baseClassName += "border-black bg-black text-white";
  // }

  // console.log(rest);

  // first arg - default styling to apply automatically
  // note - the bottom class values will take precedence than on tops for same class rules
  const classes = classnames(rest.className, "flex items-center px-3 py-1.5 border", {
    "border-blue-500 bg-blue-500": primary,
    "border-gray-900 bg-gray-900 text-white": secondary,
    "border-green-500 bg-green-500": success,
    "border-yellow-400 bg-yellow-400": warning,
    "border-red-500 bg-red-500": danger,
    "rounded-full": rounded,
    "bg-white": outline,
    // changing text color based on conditions
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

/**
 * Custom Validator - name can be anything
 */
Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    // The value of primary, secondary...will be either true or undefined - if no value provided
    // note - converting Boolean & undefined into number to check if user defines more than one prop as truthy
    // Number(true) = 1
    // Number(undefined) = NaN, since we want number...Number(!!undefined) = false is 0
    const count = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger);

    if (count > 1) {
      // Error will be thrown out as warning in the console
      return new Error("Only one of primary, secondary, success, warning or danger can be true");
    }
  },
};

export default Button;
