import { useEffect, useRef, useState } from "react";

import { GoChevronDown } from "react-icons/go";
import Panel from "../Panel/Panel";

const DropDown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  // note - useRef is to access or get a reference to a DOM elements that current component creates.
  // eg. If we have multiple DropDown components,
  // useRef will reference to its individual dom elements within every individual DropDown components.
  const dropDownContainer = useRef();
  // console.log(dropDownContainer.current); // initially - undefined

  useEffect(() => {
    const handler = e => {
      // note - Important thing to do always when using useRef is
      // that useRef will always set to NULL on component unmount or when component is not visible.
      // inputRef.current === null - this will throw an error on reading its value again

      // adding a little check to avoid bugs
      if (!dropDownContainer.current) {
        // if no reference to any element or empty, exit from this function since there is nothing to be done here
        return;
      }

      if (!dropDownContainer.current.contains(e.target)) {
        setIsOpen(false);
      }

      // another way doing same above
      // if (dropDownContainer.current.contains(e.target)) {
      //   return;
      // }

      // setIsOpen(false);
    };

    // 'true' - start Event Listening on Capture phase now
    // watch for Click Event anywhere in the document body
    document.addEventListener("click", handler, true);

    // note - At some point, DropDown component will unmount/removed from the ui like when navigating to different page
    // So that point of time, we need to tell addEventListener function stop watching for clicks
    // The above click addEventListener gets call always even if the DropDown is not visible in the screen
    // So to avoid this issue, we need to the Event listener to stop watching for clicks
    // whenever the component is removed from the screen by using Clean UP method.
    // BECAUSE WE WANT TO START CLEAN ALWAYS ON RE-RENDER - meaning don't run any Current On Going Event Listeners
    // NOTE - Clean UP method gets CALL automatically whenever the component is about to removed from the screen
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const onContainerClick = () => {
    setIsOpen(currentState => !currentState);
  };

  const onOptionClick = option => {
    setIsOpen(false);

    onChange(option);
  };

  const renderOptions = options.map(option => (
    <div
      className="hover:bg-sky-100 rounded cursor-pointer p-1"
      key={option.value}
      onClick={() => onOptionClick(option)}
    >
      {option.label}
    </div>
  ));

  return (
    <div className="w-48 relative" ref={dropDownContainer}>
      <Panel className="flex justify-between items-center cursor-pointer" onClick={onContainerClick}>
        {value?.label || "Select"}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && <Panel className="absolute top-full  bg-white">{renderOptions}</Panel>}
    </div>
  );
};
export default DropDown;
