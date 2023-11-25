import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn283(){
	const[btnColor283, setBtnColor283] = useState(localStorage.getItem("savedBtnColor283"));
	useEffect(() => { localStorage.setItem("savedBtnColor283", btnColor283);}, [btnColor283]);
	return(
		<div>
		<button
			className = {btnColor283} 
			onClick = {() => setBtnColor283((btnColor283) => (btnColor283 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn283
