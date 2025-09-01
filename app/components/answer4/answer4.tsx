
import { useState, useRef } from "react";


export function Answer4() {
  const [arrayText, setArrayText] = useState("");
  const [scopeBoolean, setScopeBoolean] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const findOpenBrackets = () => {
    const openingCharacters = ["(", "[", "{"];
    const closingCharacters = [")", "]", "}"];
    
    setShowAnswer(true);

  }
  return (
    <main >
      <div className="p-10 flex flex-col gap-5">
        <p>Question 4{`Write an efficient method that tells us whether or not an input string brackets ("{", "}", "(", ")", "[", "]") opened and closed properly.`} <br />{`Example: “{[]}” => true, “{(])}” => false, “{([)]}” => false`}</p>
        <p>Answer:</p>
        <p>Type your array (separated by ,):</p>
        <div className="flex items-center gap-5">
          <div className="textfield-container w-[350px]"> 
            <label className="textfield-label">Array</label>
            <input type="text" className="textfield" placeholder=" " onChange={(e) => setArrayText(e.target.value)} ref={inputRef}/>
          </div>
          <button className="btn-primary" onClick={findOpenBrackets}>Submit</button>
        </div>
      </div>
      {showAnswer &&
        <div className="flex flex-col pl-10">
          <p>Are all the scopes closed correctly? </p>
          {scopeBoolean ? <p style={{color: "green"}}>Yes</p> : <p style={{color: "red"}}>No</p>}
        </div>
      }
    </main>
  );
}
