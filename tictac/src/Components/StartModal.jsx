export default function StartModal({start, func, twoPlayerFunc}){
    return(
        <>
        
        <div className={`w-full h-screen bg-black absolute ${start ? 'flex' : 'hidden'} justify-center items-center flex-col gap-10`}>
            <h1 className="text-white text-6xl font-bold">Tic-tac-toe</h1>
            <div className="p-20 bg-black border-2 border-white flex justify-center items-center gap-11 rounded-lg">

                <button className="bg-black border-2 border-white p-8 rounded-lg text-white font-bold hover:bg-slate-900 hover:scale-105 duration-100 transition active:bg-black active:scale-100"
                onClick={func}>1 Player</button>
                <h2 className="text-white text-4xl font-bold">or</h2>
                <button className="bg-black border-2 border-white text-white font-bold p-8 rounded-lg hover:bg-gray-900 hover:scale-105 transition duration-100 active:bg-black active:scale-100"
                onClick={twoPlayerFunc}
                >2 Players</button>

            </div>

        </div>

        </>
    );
}