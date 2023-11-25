import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn082(){
	const[btnColor082, setBtnColor082] = useState(localStorage.getItem("savedBtnColor082"));
	useEffect(() => { localStorage.setItem("savedBtnColor082", btnColor082);}, [btnColor082]);
	return(
		<div>
		<button
			className = {btnColor082} 
			onClick = {() => setBtnColor082((btnColor082) => (btnColor082 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn082
