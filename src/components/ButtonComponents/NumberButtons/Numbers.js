import React, { useState } from "react"; // useState for useState Statement???
import { numbers } from '../../../data'; //just use ../../ to find folder   //USE A Deconstructor because you could use default but the deonsturcotr specifies 
// console.log(numbers);

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

export const Numbers = () => { // export could also be added last after steps 2 and 3 as an alternative to default
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);
    // the default value of your import should be in "useState(***here***)""
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component */}

      {numberState.map(number, index) { // The "numberState" is used (because useState turns numbers into "numberState")
        return (
          <NumberButton key = {index} number = {number}/>
        )
      }}
      
    </div>
  );
};

// //EXPORT FOR NUMBERS:
// export default Numbers
