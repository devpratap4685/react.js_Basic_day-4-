import { useState } from "react";
export default function LikeButton(){
  let [clicked,setclicked]=useState(false);
  function isclicked(){
    setclicked(!clicked);
    console.log(clicked);
 
  }
let likestyle={color:"red"};
 
return (
    <div>
        <h1 onClick={isclicked}>
       {clicked?(
       <i className="fa-solid fa-heart" style={likestyle}></i>
      )
       :( <i className="fa-regular fa-heart"></i>
       )}
       
        </h1>
    </div>
  );
}
