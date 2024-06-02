import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import { number } from "../signals.ts";

const ButtonIsland: FunctionComponent = () => {
  function addnumber() {
    if(number.value==9){
      number.value=0;
    }else{
    number.value++;
    }
  }
  return <button onClick={() => addnumber()}>Add Number</button>;
};
export default ButtonIsland;
