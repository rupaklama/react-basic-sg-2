import Accordion from "./components/Accordion/Accordion";

const items = [
  {
    id: "aadfd7979",
    label: "Can i use React on a project?",
    content: "You can use React on any projects! You can use React on any projects!",
  },
  {
    id: "12232oiu",
    label: "Can i use Javascript on a project?",
    content: "You can use Javascript on any projects! You can use Javascript on any projects!",
  },
  {
    id: "0vbv098bv908v",
    label: "Can i use CSS on a project?",
    content: "You can use CSS on any projects! You can use CSS on any projects!",
  },
];

const App = () => {
  return <Accordion items={items} />;
};
export default App;
