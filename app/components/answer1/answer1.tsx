import { useState, useRef } from "react";


export function Answer1() {
  const [arrayText, setArrayText] = useState("");
  const [duplicatesArray, setDuplicatesArray] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null);
  const findDuplicates = () => {

    const tempArray = arrayText.split(",");
    setDuplicatesArray(tempArray.filter((item, index) => tempArray.indexOf(item) !== index));
    if (inputRef.current) {
      inputRef.current.value = "";
    }

  }
  return (
    <main >
      <div className="p-10 flex flex-col gap-5">
        <p>Question 1: Write a javascript function that finds the duplicate items in any given array.</p>
        <p>Answer:</p>
        <p>Type your array (separated by ,):</p>
        <div className="flex items-center gap-5">
          <div className="textfield-container w-[350px]"> 
            <label className="textfield-label">Array</label>
            <input type="text" className="textfield" placeholder=" " onChange={(e) => setArrayText(e.target.value)} ref={inputRef}/>
          </div>
          <button className="btn-primary" onClick={findDuplicates}>Submit</button>
        </div>
      </div>
      {duplicatesArray.length > 0 && (
        <div className="flex flex-col pl-10">
          <p>Your duplicates are: </p>
          <ul className="list-disc pl-5">
            {duplicatesArray.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
