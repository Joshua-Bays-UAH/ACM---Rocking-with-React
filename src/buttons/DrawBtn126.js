import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn126(){
	const[btnColor126, setBtnColor126] = useState(localStorage.getItem("savedBtnColor126"));
	useEffect(() => { localStorage.setItem("savedBtnColor126", btnColor126);}, [btnColor126]);
	return(
		<div>
		<button
			className = {btnColor126} 
			onClick = {() => setBtnColor126((btnColor126) => (btnColor126 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn126
