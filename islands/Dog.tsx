import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import { api_data_signal, number } from "../signals.ts";
import { useEffect } from "preact/hooks";
import { useState } from "preact/hooks";

export type DogProps = {
  message: string;
};

const Dog: FunctionComponent<{dog:DogProps}> = (props) => {
  useEffect(() => {
    console.log(api_data_signal);
  }, [api_data_signal.value]);
  return <div>{api_data_signal.value}</div>;
};
export default Dog;
