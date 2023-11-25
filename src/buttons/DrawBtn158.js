import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn158(){
	const[btnColor158, setBtnColor158] = useState(localStorage.getItem("savedBtnColor158"));
	useEffect(() => { localStorage.setItem("savedBtnColor158", btnColor158);}, [btnColor158]);
	return(
		<div>
		<button
			className = {btnColor158} 
			onClick = {() => setBtnColor158((btnColor158) => (btnColor158 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn158
