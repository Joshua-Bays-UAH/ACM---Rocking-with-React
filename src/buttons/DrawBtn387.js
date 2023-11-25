import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn387(){
	const[btnColor387, setBtnColor387] = useState(localStorage.getItem("savedBtnColor387"));
	useEffect(() => { localStorage.setItem("savedBtnColor387", btnColor387);}, [btnColor387]);
	return(
		<div>
		<button
			className = {btnColor387} 
			onClick = {() => setBtnColor387((btnColor387) => (btnColor387 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn387
