import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn340(){
	const[btnColor340, setBtnColor340] = useState(localStorage.getItem("savedBtnColor340"));
	useEffect(() => { localStorage.setItem("savedBtnColor340", btnColor340);}, [btnColor340]);
	return(
		<div>
		<button
			className = {btnColor340} 
			onClick = {() => setBtnColor340((btnColor340) => (btnColor340 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn340
