import { useSignal } from "@preact/signals";
import { api_data_signal, number } from "../signals.ts";
import ButtonIsland from "../islands/ButtonIsland.tsx";
import { useState } from "preact/hooks";
import NumberIsland from "../islands/Number.tsx";
import ButtonFetch from "../islands/ButtonFetch.tsx";
import Dog from "../islands/Dog.tsx";
import { DogProps } from "../islands/Dog.tsx";
import Visor from "../islands/Vistor.tsx";
import Form from "../islands/Form.tsx";

export default function Home() {
  const DogProps: DogProps = api_data_signal.value;
  console.log(api_data_signal.value)
  return (
    <div className="MainPage">
      <ButtonIsland></ButtonIsland>
      <NumberIsland></NumberIsland>
      <ButtonFetch></ButtonFetch>
      <Visor></Visor>
      <Form></Form>
    </div>
  );
}
