import { useState } from "react";

export default function Ludo(){
    let[moves,setmoves]=useState({Blue:0,Red:0,Green:0,Yellow:0 });
    let updateBlue=()=>{
     console.log(`moves.Blue=${moves.Blue}`)
        setmoves({...moves,Blue:moves.Blue+1});
    }

    return(
        <div>
            <h1>Game begins !</h1>
            <div className="Board">
                <p>Blue Move:{moves.Blue}</p>
                <button  onClick={updateBlue} style={{backgroundColor:"blue"}}>+1</button>
                <p>Red Move:{moves.Red}</p>
                <button style={{backgroundColor:"red"}}>+1</button>
                <p>Green Move:{moves.Green}</p>
                <button style={{backgroundColor:"green"}}>+1</button>
                <p>Yellow Move:{moves.Yellow}</p>
                <button style={{backgroundColor:"yellow",color:"black"}}>+1</button>

            </div>
        </div>
    );
}