import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn106(){
	const[btnColor106, setBtnColor106] = useState(localStorage.getItem("savedBtnColor106"));
	useEffect(() => { localStorage.setItem("savedBtnColor106", btnColor106);}, [btnColor106]);
	return(
		<div>
		<button
			className = {btnColor106} 
			onClick = {() => setBtnColor106((btnColor106) => (btnColor106 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn106
