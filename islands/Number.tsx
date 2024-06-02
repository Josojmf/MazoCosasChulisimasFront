import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import { number } from "../signals.ts";

const NumberIsland: FunctionComponent = () => {
  return (
    <div className="numberContainer">
      <div className="number">{number}</div>
    </div>
  );
};
export default NumberIsland;
