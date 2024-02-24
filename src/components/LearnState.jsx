'use client'
import { useState } from "react"

const LearnState = () => {
    const [num, func] = useState(0);
    const hand = () =>{
        func(num +1 )
    }
  return (
    <>
    <h1>{num}</h1>
    <button className="bg-lime-800" onClick={hand}> button 1</button>
    
    <div className="bg-red-500 w-full h-12 mt-7" id="dv" ></div>
    
    </>

  )
}

export default LearnState

export const Randomnum = () => {
    const [num, Rnum] = useState( {x: 0 , y: 0});
    const hand = () =>{
        const no = Math.floor(Math.random()*10000);
        Rnum({x: no , y: no+Math.floor(Math.random()*20)})
    }
  return (
    <>
    <h1> 1 RAndom number {num.x}</h1>
    <h1> 2 RAndom number {num.y}</h1>
    <button className="bg-lime-800" onClick={hand}> button 1</button>
    </>

  )
}