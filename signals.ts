import { signal, useSignal } from "@preact/signals";
import DataAPI from "./islands/ButtonFetch.tsx";
export type DataAPI = {
  message: string;
  status: string;
};
export const number = signal<number>(0);
export const api_data_signal = signal<DataAPI>({
  message: "https://images.dog.ceo/breeds/terrier-dandie/n02096437_1668.jpg",
  status: "",
});
