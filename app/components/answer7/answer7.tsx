
import { useState, useRef } from "react";
const carrotTypes = [{kg: 5, price: 100}, {kg: 7, price: 150}, {kg: 3, price: 70}];
const capacity = 36; //kg


const getMaxValue = (carrotTypes: any[], capacity: number) =>{


 let mostValuableCarrotKg = 0;
 let mostValuableCarrotIndex = 0; 
 let howManyMostValuable = 0;
 let leftover = 0;
 const [maxValue, setMaxValue] = useState(0);
 for(let i=0; i< carrotTypes.length; i++){
   if(mostValuableCarrotKg < carrotTypes[i].price / carrotTypes[i].kg){
     mostValuableCarrotKg = carrotTypes[i].price / carrotTypes[i].kg;
     mostValuableCarrotIndex = i;
   }
 }
 
 howManyMostValuable = Math.floor(capacity / carrotTypes[mostValuableCarrotIndex].kg);
 setMaxValue(howManyMostValuable * carrotTypes[mostValuableCarrotIndex].price);
 
 leftover = Math.floor(capacity % carrotTypes[mostValuableCarrotIndex].kg);
 if(leftover >= 1){
  if(carrotTypes.some(item => item.kg <= leftover)){

  }
 }
 console.log(howManyMostValuable);




}
getMaxValue(carrotTypes, capacity);

export function Answer7() {
  return (
    <main >
      <div className="p-10 flex flex-col gap-5">
        <p>Question 7: Think that you have an unlimited number of carrots, but a limited number of carrot <br />
          types. Also, you have one bag that can hold a limited weight. Each type of carrot has a <br />
          weight and a price. Write a function that takes carrotTypes and capacity and return the <br />
          maximum value the bag can hold. [Python or Javascript] <br />
          Example: <br />
          {`carrotTypes = [{kg: 5, price: 100}, {kg: 7, price: 150}, {kg: 3, price: 70}]`} <br />
          capacity = 36 //kg <br />
          getMaxValue(carrotTypes, capacity)
        </p>
        <p>Answer:</p>
        <div className="flex items-center gap-5">
        </div>
      </div>
    </main>
  );
}
