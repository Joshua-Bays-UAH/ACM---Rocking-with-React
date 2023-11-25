import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn348(){
	const[btnColor348, setBtnColor348] = useState(localStorage.getItem("savedBtnColor348"));
	useEffect(() => { localStorage.setItem("savedBtnColor348", btnColor348);}, [btnColor348]);
	return(
		<div>
		<button
			className = {btnColor348} 
			onClick = {() => setBtnColor348((btnColor348) => (btnColor348 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn348
