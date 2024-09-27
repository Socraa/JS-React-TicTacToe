import { useState } from "react";

export default function Square({xo, changeVal}){

    function checkin(){
        if(xo == null){
        changeVal();
            
        }
    }


    return(
        <>

        <div className="w-[10rem] h-[10rem] bg-black flex justify-center items-center border-white border-2 text-5xl font-bold rounded-lg"
        onClick={checkin}>
            <h1 className="text-white">{xo}</h1>
        </div>
        
        </>
    );
}