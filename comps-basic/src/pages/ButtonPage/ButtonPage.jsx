import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "../../components/Button/Button";

const ButtonPage = () => {
  return (
    <div>
      <h1>Creating Reusable Components</h1>
      <Button primary rounded className="mb-5" onClick={() => console.log("clicked")}>
        {/* <GoBell className="mr-1" /> Cool Icon */}
        <GoBell />
        <h5>hello</h5>
      </Button>

      <Button secondary>Hello</Button>
      <Button success outline>
        <GoCloudDownload /> Hello
      </Button>
      <Button warning rounded>
        Hello
      </Button>
      <Button danger outline>
        <GoDatabase /> Hello
      </Button>
    </div>
  );
};

export default ButtonPage;
