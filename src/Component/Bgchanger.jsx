import React, { useState } from 'react'


export default function Bgchanger() {
    const [colour,setcolor]=useState('pink')
  return (
    <>
    <h1 className='color-black text-6xl font-serif font-bold' >ADD YOUR COLOURS</h1>

    <div id='clickaddcolor' className='border 5px solid black ' style={{backgroundColor:colour}}></div>
    
    <h2 className='font-extrabold w-max h-20 mb-10 rounded-xl text-4xl py-4' style={{color:colour}} id='pickcolor'>pick color to add inbox</h2>
   
    <div className=''>
      <div id='btndiv'>
        
         <button onClick={()=>setcolor("red")} className='bg-red-600 mr-3'>RED</button>
         <button onClick={()=>setcolor("green")} className='bg-green-500 mr-3 '>GREEN</button>
         <button onClick={()=>setcolor("yellow")} className='bg-yellow-600 mr-3'>YELLOW</button>
         <button onClick={()=>setcolor("blue")} className='bg-blue-600 mr-3'>BLUE</button>
         <button onClick={()=>setcolor("black")} className='bg-black mr-3 text-white'>BLACK</button>
         <button onClick={()=>setcolor("white")} className='bg-white mr-3'>WHITE</button>
         <button onClick={()=>setcolor("purple")} className='bg-purple-600 mr-3'>PURPLE</button>
         <button onClick={()=>setcolor("gray")} className='bg-gray-500 mr-3'>GRAY</button>
         <button onClick={()=>setcolor("orange")} className='bg-orange-600 mr-3'>ORANGE</button>
         </div>
    </div>
    </>
  )
}
