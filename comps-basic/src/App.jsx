import { useState } from "react";
import DropDown from "./components/DropDown/DropDown";

const options = [
  { label: "Red", value: "red" },
  { label: "Green", value: "green" },
  { label: "Blue", value: "blue" },
];

const App = () => {
  const [value, setValue] = useState(null);

  const onChange = option => {
    setValue(option);
  };

  return (
    <div className="flex">
      <DropDown options={options} value={value} onChange={onChange} />
    </div>
  );
};
export default App;
