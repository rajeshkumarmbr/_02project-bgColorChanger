import {useState} from 'react';
import React from 'react';

const Main = () => {

    const [color, setColor] = useState("")
    const [input, setInput] = useState ('navy')
    const [bgcolor, setBgcolor] = useState('null')

    function changeButton(color) {
        console.log(color);
        setInput(color)
    }

    return( 
    <>
    <div className=" h-[80vh] flex justify-center flex-col items-center text-white" style={{backgroundColor: input }}>
            
            <input type="text" onChange={e => setBgcolor(e.target.value) } className='text-white bg-black'  />
            <h1 className='text-3xl font-bold py-3 capitalize'>Click On Button | Change Background Color </h1>
            <h2 className='text-4xl font-bold capitalize shadow-md'>{color}</h2>

        </div>
    <div className="footer h-[9.5vh] w-full bg-pink-950 flex flex-wrap  items-center justify-around text-white">
        <button className='bg-red-600 px-7 py-2 rounded hover:bg-red-500'  onClick={() => changeButton(bgcolor)}>Change Color Button</button>
        {/* <button className='bg-pink-300 px-7 py-2 rounded hover:bg-pink-400' onClick={() => setColor(input)} >Set Color </button>
        <button className='bg-green-600 px-7 py-2 rounded hover:bg-green-500' onClick={() => setColor("green")}>Green</button>
        <button className='bg-yellow-600 px-7 py-2 rounded hover:bg-yellow-500' onClick={() => setColor("yellow")}>Yellow</button>
        <button className='bg-gray-600 px-7 py-2 rounded hover:bg-gray-700' onClick={() => setColor("gray")}>Black</button>
        <button className='bg-blue-600 px-7 py-2 rounded hover:bg-blue-500' onClick={() => setColor("blue")}>Blue</button> */}
    </div> 
    </>   
    )
}
export default Main