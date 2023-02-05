import Button from "../components/Button";
import { GoBell } from "react-icons/go";

const ButtonPage = () => {
  return (
    <div>
      <div>
        <Button primary outline onClick={() => console.log("hello")} className="mb-5">
          <GoBell />
          Click here
        </Button>
      </div>
      <div>
        <Button secondary>Click me</Button>
      </div>
      <div>
        <Button success rounded>
          Buy now
        </Button>
      </div>
      <div>
        <Button warning rounded>
          Hide ads
        </Button>
      </div>
      <div>
        <Button danger outline rounded>
          Click
        </Button>
      </div>
    </div>
  );
};

export default ButtonPage;
