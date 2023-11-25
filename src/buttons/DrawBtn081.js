import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn081(){
	const[btnColor081, setBtnColor081] = useState(localStorage.getItem("savedBtnColor081"));
	useEffect(() => { localStorage.setItem("savedBtnColor081", btnColor081);}, [btnColor081]);
	return(
		<div>
		<button
			className = {btnColor081} 
			onClick = {() => setBtnColor081((btnColor081) => (btnColor081 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn081
