import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn319(){
	const[btnColor319, setBtnColor319] = useState(localStorage.getItem("savedBtnColor319"));
	useEffect(() => { localStorage.setItem("savedBtnColor319", btnColor319);}, [btnColor319]);
	return(
		<div>
		<button
			className = {btnColor319} 
			onClick = {() => setBtnColor319((btnColor319) => (btnColor319 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn319
