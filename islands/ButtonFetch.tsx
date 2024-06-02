import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import { number } from "../signals.ts";
import axios from "npm:axios";
import { api_data_signal } from "../signals.ts";

export type DataAPI = {
  message: string;
  status: string;
};

const ButtonIsland: FunctionComponent = () => {
  async function handleChange(event: any) {
    event.preventDefault();
    const APIURL = "https://dog.ceo/api/breeds/image/random";
    const axiosResponse = await axios.get(APIURL);
    const data: DataAPI = await axiosResponse.data;
    api_data_signal.value = data;
    console.log(api_data_signal.value);
  }

  return <button onClick={(e) => handleChange(e)}>Fetch Dog</button>;
};
export default ButtonIsland;
