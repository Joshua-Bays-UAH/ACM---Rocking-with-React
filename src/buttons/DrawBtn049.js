import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn049(){
	const[btnColor049, setBtnColor049] = useState(localStorage.getItem("savedBtnColor049"));
	useEffect(() => { localStorage.setItem("savedBtnColor049", btnColor049);}, [btnColor049]);
	return(
		<div>
		<button
			className = {btnColor049} 
			onClick = {() => setBtnColor049((btnColor049) => (btnColor049 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn049
