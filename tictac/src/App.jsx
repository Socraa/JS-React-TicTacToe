import { useState } from "react"
import Player from "./Components/Player"
import Square from "./Components/Square"
import StartModal from "./Components/StartModal";
import EndModal from "./Components/EndModal";

function App() {

  const [player1, setPlayer1] = useState("Player 1");
  const [player2, setPlayer2] = useState("Player 2");
  const [isSingle, setIsSingle] = useState(true);
  const [changeSym, setChangeSym] = useState("X");
  const [board, setBoard] = useState([null, null, null, 
                                      null, null, null, 
                                      null, null, null,]) // it's like Array(9).fill(null) but since sir don't want this


    const [issTrue, setIssTrue] = useState(true);
    function isOnePlayer(){
      setIsSingle(true);
      setIssTrue(false);
    }

    function isTwoPlayer(){
      setIsSingle(false);
      setIssTrue(false);
    }

    

    const [modalContent, setModalContent] = useState("");

    const [isTrue, setIsTrue] = useState(true);
    function isHidden(){
      setIsTrue((prev) => !prev);
    }



    function whichPlaya(){

      const win = checkWinner(newBoard);

      if(win){
        setTimeout(()=> {
          setModalContent((win == "O" ? player2 : player1) + " Wins!");
          isHidden();
          resetBoard();
        }, 200)
          
      }else if (!newBoard.includes(null)){

        setTimeout(()=>{
          setModalContent("Fucking Draw");
          isHidden();
          resetBoard();

        },200)

      }
    
      
    }



  function resetBoard(){
    setBoard([null,null,null,null,null,null,null,null,null]);
    setChangeSym("X");
  }                                      

  const newBoard = [...board];
  function changeValue(index){
      newBoard[index] = changeSym;
      setBoard(newBoard);
      setChangeSym((prev) => prev == "O" ? "X" : "O");
      whichPlaya();
  }


  const winners = [
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6],
  ]

  function checkWinner(board){

    for(let i = 0 ; i < winners.length; i++){
      const [a,b,c] = winners[i];
      if(board[a] === board[b] && board[b] === board[c] && board[a] !== null){
        return board[a];
      }
    }
    return null;
  }
  
  
  


  return (
    <>
    <StartModal start={issTrue} func={isOnePlayer} twoPlayerFunc={isTwoPlayer}/>
    <EndModal check={isTrue} whichPlayer={modalContent} close={isHidden}/>

      <div className="w-full h-screen bg-cover bg-center bg-slate-900 flex items-center justify-center"
      style={{backgroundImage: 'url(/wally.jpg)'}}>

        <div className="w-1/2 h-[50rem]  rounded-xl flex items-center justify-evenly flex-col border-4 border-white bg-black">

          <div className="p-10 bg-black rounded-xl flex justify-center items-center border-4 border-white gap-10">
          {isSingle ? (<Player symbol={"X"} player={player1} playerName={setPlayer1}/>) :
          (<>

            <Player symbol={"X"} player={player1} playerName={setPlayer1}/>
            <Player symbol={"O"} player={player2} playerName={setPlayer2}/>
          
          </>)}

          </div>

            <div className=" bg-white grid grid-cols-3 place-content-center p-1 border-4 border-black shadow-slate-900 rounded-lg" > {/*It gon be fucked up if you put width and heigth. Use paddin instead */}
            {board.map((value, index) => (
              <Square key={index} xo={value} changeVal={() => changeValue(index)} />
            ))}

            </div>    

        </div>

      </div>
    </>
  )
}

export default App
