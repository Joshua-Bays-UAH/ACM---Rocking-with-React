import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn168(){
	const[btnColor168, setBtnColor168] = useState(localStorage.getItem("savedBtnColor168"));
	useEffect(() => { localStorage.setItem("savedBtnColor168", btnColor168);}, [btnColor168]);
	return(
		<div>
		<button
			className = {btnColor168} 
			onClick = {() => setBtnColor168((btnColor168) => (btnColor168 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn168
