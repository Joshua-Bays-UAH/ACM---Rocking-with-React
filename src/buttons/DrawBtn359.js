import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn359(){
	const[btnColor359, setBtnColor359] = useState(localStorage.getItem("savedBtnColor359"));
	useEffect(() => { localStorage.setItem("savedBtnColor359", btnColor359);}, [btnColor359]);
	return(
		<div>
		<button
			className = {btnColor359} 
			onClick = {() => setBtnColor359((btnColor359) => (btnColor359 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn359
