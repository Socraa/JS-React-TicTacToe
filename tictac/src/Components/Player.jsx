import { useState } from "react";

export default function Player({player, symbol, playerName}){

    const [isTrue, setIsTrue] = useState(true); 

    function handleClick(){
        setIsTrue((prev) => prev ? false : true);
    }

    function changePlayerName(event){
        playerName(event.target.value) // event is the action which is onchange, target is where you made the action which is in input, value is the value you gon input
    }


    return(
        <>
        <div className="flex justify-evenly items-center h-[4rem] w-[18rem] bg-white rounded-xl">
                <input type="text" disabled={isTrue} value={player} className=" w-[8rem] rounded-md bg-black text-white p-1" onChange={changePlayerName} />
                <h1 className="text-black font-bold">{symbol}</h1>
                <button className="text-black hover:text-lg" onClick={handleClick}>{isTrue ? "Edit" : "Save"}</button>
        </div>
        </>
    );
}