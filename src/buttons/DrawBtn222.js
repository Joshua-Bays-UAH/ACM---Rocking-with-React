import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn222(){
	const[btnColor222, setBtnColor222] = useState(localStorage.getItem("savedBtnColor222"));
	useEffect(() => { localStorage.setItem("savedBtnColor222", btnColor222);}, [btnColor222]);
	return(
		<div>
		<button
			className = {btnColor222} 
			onClick = {() => setBtnColor222((btnColor222) => (btnColor222 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn222
