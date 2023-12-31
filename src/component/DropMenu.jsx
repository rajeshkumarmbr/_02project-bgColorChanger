import React from "react";

const  Dropdown = () => {
            return(
                    <div className=" w-24 h-auto relative bg-slate-800 text-white">
                        <ul className="flex flex-col absolute ">
                            <li><a href="#" className="hover:text-gray-400 h-3 ">Home</a></li>
                            <li><a href="#" className="hover:text-gray-400 h-3 ">About</a></li>
                            <li><a href="#" className="hover:text-gray-400 h-3 ">Services</a></li>
                            <li><a href="#" className="hover:text-gray-400 h-3 ">Contact</a></li>
                        </ul>
                    </div>
            )
}

export default Dropdown