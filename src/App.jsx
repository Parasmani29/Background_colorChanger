import {useState} from 'react'

function App() {
  
  const [color, setColor] = useState("olive")

  return (
    <>

    
    <div className='w-full h-screen duration-200'
    style={{backgroundColor:color}}>
     <div className="text-center bottom-12 inset-x-0 px-2">
  <h1 className="text-center shadow-lg text-black px-3 py-2 rounded-full">
    This is a color changer program created using
  </h1>
  <h2 className="text-center shadow-lg bg-olive text-black px-3 py-2 rounded-full">
    Tailwind CSS with Vite
  </h2>
</div>



<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
  <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full">
    <button onClick={()=> setColor("red")}
    className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
    style={{ backgroundColor: "red" }}>Red</button>
    <button onClick={()=>setColor("green")}
     className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
    style={{ backgroundColor: "green" }}>Green</button>
    <button onClick={()=>setColor("yellow")}
    className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
    style={{ backgroundColor: "yellow" }}>Yellow</button>
    <button onClick={()=>setColor("blue")}
    className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
    style={{ backgroundColor: "blue" }}>Blue</button>
    <button onClick={()=>setColor("tomato")}
    className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
    style={{ backgroundColor: "tomato" }}>Tomato</button>
  </div>
</div>
    
      </div>  
    </>
  )
}

export default App
