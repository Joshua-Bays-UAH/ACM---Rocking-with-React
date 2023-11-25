import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn390(){
	const[btnColor390, setBtnColor390] = useState(localStorage.getItem("savedBtnColor390"));
	useEffect(() => { localStorage.setItem("savedBtnColor390", btnColor390);}, [btnColor390]);
	return(
		<div>
		<button
			className = {btnColor390} 
			onClick = {() => setBtnColor390((btnColor390) => (btnColor390 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn390
