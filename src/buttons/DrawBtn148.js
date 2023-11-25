import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn148(){
	const[btnColor148, setBtnColor148] = useState(localStorage.getItem("savedBtnColor148"));
	useEffect(() => { localStorage.setItem("savedBtnColor148", btnColor148);}, [btnColor148]);
	return(
		<div>
		<button
			className = {btnColor148} 
			onClick = {() => setBtnColor148((btnColor148) => (btnColor148 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn148
