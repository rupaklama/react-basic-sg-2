import { useState } from "react";

import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const onClick = idx => {
    setExpandedIndex(prevIndex => {
      if (prevIndex === idx) {
        // Using setting func 'prevState' to fix a bug
        // if same index, close it which didn't happen on super fast double click
        // console.log(expandedIndex); $0.click(); $0.click();
        return -1;
      } else {
        return idx;
      }
    });

    // note - above code is doing the same below
    // if (expandedIndex === idx) {
    //   setExpandedIndex(-1);
    // } else {
    //   setExpandedIndex(idx);
    // }
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = <span className="text-2xl">{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>;

    return (
      <div key={item.id}>
        <div
          className="flex items-center justify-between p-3 bg-gray-50 border-b cursor-pointer "
          onClick={() => onClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
};
export default Accordion;
