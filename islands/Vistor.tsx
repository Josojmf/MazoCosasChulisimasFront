import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import Dog, { DogProps } from "./Dog.tsx";
import { api_data_signal } from "../signals.ts";

const Visor: FunctionComponent = () => {
  const dog: DogProps = api_data_signal.value;
  return (
    <div>
      <img className="DoggoImage" src={dog.message}></img>
    </div>
  );
};
export default Visor;
