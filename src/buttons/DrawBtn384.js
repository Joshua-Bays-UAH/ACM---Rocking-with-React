import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn384(){
	const[btnColor384, setBtnColor384] = useState(localStorage.getItem("savedBtnColor384"));
	useEffect(() => { localStorage.setItem("savedBtnColor384", btnColor384);}, [btnColor384]);
	return(
		<div>
		<button
			className = {btnColor384} 
			onClick = {() => setBtnColor384((btnColor384) => (btnColor384 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn384
