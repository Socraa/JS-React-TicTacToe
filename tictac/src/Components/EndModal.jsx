import { useState } from "react";

export default function EndModal({check, whichPlayer,close}){


    return (
        <>
        
        <div className={`w-full h-screen absolute ${check ? 'hidden' : 'flex'} items-center justify-center backdrop-blur-3xl`}>

            <div className="p-10 gap-10 bg-white rounded-lg flex flex-col justify-evenly items-center border-4 border-black">
                <h1 className="text-6xl font-bold">{whichPlayer}</h1>
                <button className="border-2 border-black hover:bg-slate-200 hover:scale-110 transition duratioin-100 active:scale-100 active:bg-white text-xl rounded-lg p-1"
                onClick={close}
                > Play Again</button>

            </div>

        </div>
        
        </>
    );
}