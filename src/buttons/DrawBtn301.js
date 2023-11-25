import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn301(){
	const[btnColor301, setBtnColor301] = useState(localStorage.getItem("savedBtnColor301"));
	useEffect(() => { localStorage.setItem("savedBtnColor301", btnColor301);}, [btnColor301]);
	return(
		<div>
		<button
			className = {btnColor301} 
			onClick = {() => setBtnColor301((btnColor301) => (btnColor301 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn301
