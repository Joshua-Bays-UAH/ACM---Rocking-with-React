import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn077(){
	const[btnColor077, setBtnColor077] = useState(localStorage.getItem("savedBtnColor077"));
	useEffect(() => { localStorage.setItem("savedBtnColor077", btnColor077);}, [btnColor077]);
	return(
		<div>
		<button
			className = {btnColor077} 
			onClick = {() => setBtnColor077((btnColor077) => (btnColor077 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn077
