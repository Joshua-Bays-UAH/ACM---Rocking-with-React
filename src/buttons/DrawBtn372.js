import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn372(){
	const[btnColor372, setBtnColor372] = useState(localStorage.getItem("savedBtnColor372"));
	useEffect(() => { localStorage.setItem("savedBtnColor372", btnColor372);}, [btnColor372]);
	return(
		<div>
		<button
			className = {btnColor372} 
			onClick = {() => setBtnColor372((btnColor372) => (btnColor372 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn372
