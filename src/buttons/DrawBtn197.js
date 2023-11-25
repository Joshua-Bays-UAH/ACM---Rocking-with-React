import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn197(){
	const[btnColor197, setBtnColor197] = useState(localStorage.getItem("savedBtnColor197"));
	useEffect(() => { localStorage.setItem("savedBtnColor197", btnColor197);}, [btnColor197]);
	return(
		<div>
		<button
			className = {btnColor197} 
			onClick = {() => setBtnColor197((btnColor197) => (btnColor197 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn197
