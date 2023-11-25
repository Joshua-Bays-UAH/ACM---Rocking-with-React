import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn134(){
	const[btnColor134, setBtnColor134] = useState(localStorage.getItem("savedBtnColor134"));
	useEffect(() => { localStorage.setItem("savedBtnColor134", btnColor134);}, [btnColor134]);
	return(
		<div>
		<button
			className = {btnColor134} 
			onClick = {() => setBtnColor134((btnColor134) => (btnColor134 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn134
