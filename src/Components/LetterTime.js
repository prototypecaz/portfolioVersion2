import { useEffect, useState } from "react";

function LetterTime({ letters,visible }) {


    let [letter,setLetter] = useState()

    let tableauAlphabet = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
      ];

     

   
    useEffect(()=>{

        
        let boucle = 0
        let interval
        

        if(visible){
            
        interval =  setInterval(()=>{
            setLetter(tableauAlphabet[Math.floor(Math.random() * tableauAlphabet.length)]);
           

           
                //setLetter(letters)
           

            boucle++

            if(boucle > 8){
              boucle = 0
              setLetter(letters);
              clearInterval(interval)
            }
            
        },30)}
    },[visible])
    
  
  return (
    <span>{letter}</span>
  );
}

export default LetterTime;
