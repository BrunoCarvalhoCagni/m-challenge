import { useState, useRef, useEffect } from "react";


export function Answer2() {
  const [arrayText, setArrayText] = useState("");
  const [tempArray, setTempArray] = useState<string[]>([]);
  const [intervalArray, setIntervalArray] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const submitArray = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    setTempArray(arrayText.split(","));
    

  }
  useEffect(() => {
    const load = async () => {
      
      setIntervalArray([]);
      let delay = 1000;

      for (const item of tempArray) {
        await new Promise<void>((resolve) => {
          setTimeout(() => {
            setIntervalArray(prev => [...prev, item]);
            resolve();
          }, delay);
        });
        delay *= 2;
      }
    };
    load();
  }, [tempArray]);
  return (
    <main >
      <div className="p-10 flex flex-col gap-5">
        <p>Question 2: Write an async javascript function that writes every item in any given array with 1, 2, 4, 8,
          etc., seconds apart. <br />
          Example: for [“a”, “b”, “c”, “d”], “a” is printed 1 second after the code runs, “b” is printed 2 <br />
          seconds after the code runs, “c” is printed 4 seconds after the code runs, etc.
        </p>
        <p>Answer:</p>
        <p>Type your array (separated by ,):</p>
        <div className="flex items-center gap-5">
          <div className="textfield-container w-[350px]"> 
            <label className="textfield-label">Array</label>
            <input type="text" className="textfield" placeholder=" " onChange={(e) => setArrayText(e.target.value)} ref={inputRef}/>
          </div>
          <button className="btn-primary" onClick={submitArray}>Submit</button>
        </div>
      </div>
      {intervalArray.length > 0 && (
        <div className="flex flex-col pl-10">
          <p>Your array in set intervals: </p>
          <ul className="list-disc pl-5">
            {intervalArray.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
