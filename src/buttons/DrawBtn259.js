import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn259(){
	const[btnColor259, setBtnColor259] = useState(localStorage.getItem("savedBtnColor259"));
	useEffect(() => { localStorage.setItem("savedBtnColor259", btnColor259);}, [btnColor259]);
	return(
		<div>
		<button
			className = {btnColor259} 
			onClick = {() => setBtnColor259((btnColor259) => (btnColor259 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn259
