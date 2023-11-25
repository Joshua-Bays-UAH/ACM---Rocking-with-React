import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn214(){
	const[btnColor214, setBtnColor214] = useState(localStorage.getItem("savedBtnColor214"));
	useEffect(() => { localStorage.setItem("savedBtnColor214", btnColor214);}, [btnColor214]);
	return(
		<div>
		<button
			className = {btnColor214} 
			onClick = {() => setBtnColor214((btnColor214) => (btnColor214 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn214
