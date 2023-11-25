import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn031(){
	const[btnColor031, setBtnColor031] = useState(localStorage.getItem("savedBtnColor031"));
	useEffect(() => { localStorage.setItem("savedBtnColor031", btnColor031);}, [btnColor031]);
	return(
		<div>
		<button
			className = {btnColor031} 
			onClick = {() => setBtnColor031((btnColor031) => (btnColor031 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn031
