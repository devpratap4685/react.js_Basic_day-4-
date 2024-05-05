import { useState } from "react";
export default function Counter(){
    let [count,setcount]=useState(0);
    function incCount(){
         setcount(count+1);
        console.log(count);
    }
    return(
        <div>
            <h1>Count={count}</h1>
            <button onClick={incCount}>Increase count</button>
        </div>
      
    );
  

}
// // Get references to the button and count elements
// const clickButton = document.getElementById('clickButton');
// const countDisplay = document.getElementById('count');

// // Initialize count
// let count = 0;

// // Function to update count and display    using javaScript
// function updateCount() {
//   count++;
//   countDisplay.textContent = count;
// }

// // Add event listener to button
// clickButton.addEventListener('click', updateCount);