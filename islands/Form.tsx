import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import { number } from "../signals.ts";
import { useState } from "preact/hooks";

const Form: FunctionComponent = () => {
  const [correct, satcorrect] = useState("incorrect");
  const [enablebutoon, setenablebutton] = useState<boolean>(false);
  const [correctname, setcorrectname] = useState<boolean>(false);
  const [correctpass, setcorrectpass] = useState<boolean>(false);

  function CheckCorrect(e: string) {
    if (e.length > 0) {
      console.log(" mayor 3");
    } else {
      console.log(" menor 3");
    }
  }
  function CheckCorrectPassword(e: string) {
    if (e.length > 0) {
      console.log(" mayor 1 pass");
      setcorrectpass(true);
    } else {
      console.log(" menor 1 pass");
      setcorrectpass(false);
      setenablebutton(true);
    }
  }
  function CheckCorrectName(e: string) {
    if (e.length > 0) {
      console.log(" mayor 1 name");
      setcorrectname(true);
    } else {
      console.log(" menor 3 name");
      setcorrectname(false);
      setenablebutton(true);
    }
  }
  return (
    <form
      action="/login"
      method="post"
    >
      <input
        className="login"
        name="username"
        onInput={(e) => CheckCorrectName(e.target.value)}
      >
      </input>
      <input
        className="login"
        name="password"
        onInput={(e) => CheckCorrectPassword(e.target.value)}
      >
      </input>
      <button disabled={enablebutoon}>login</button>
      {!correctpass && (
        <div className="PasswordError">
          Incorrect Password, you need at leats 4 characters
        </div>
      )}
      {!correctname && (
        <div className="PasswordError">
          Incorrect Username, you need at leats 4 characters
        </div>
      )}

      {correctname && <div>Correct Name</div>}
      {correctpass && <div>Correct Password</div>}
    </form>
  );
};
export default Form;
