import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn035(){
	const[btnColor035, setBtnColor035] = useState(localStorage.getItem("savedBtnColor035"));
	useEffect(() => { localStorage.setItem("savedBtnColor035", btnColor035);}, [btnColor035]);
	return(
		<div>
		<button
			className = {btnColor035} 
			onClick = {() => setBtnColor035((btnColor035) => (btnColor035 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn035
