import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn212(){
	const[btnColor212, setBtnColor212] = useState(localStorage.getItem("savedBtnColor212"));
	useEffect(() => { localStorage.setItem("savedBtnColor212", btnColor212);}, [btnColor212]);
	return(
		<div>
		<button
			className = {btnColor212} 
			onClick = {() => setBtnColor212((btnColor212) => (btnColor212 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn212
