import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn080(){
	const[btnColor080, setBtnColor080] = useState(localStorage.getItem("savedBtnColor080"));
	useEffect(() => { localStorage.setItem("savedBtnColor080", btnColor080);}, [btnColor080]);
	return(
		<div>
		<button
			className = {btnColor080} 
			onClick = {() => setBtnColor080((btnColor080) => (btnColor080 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn080
