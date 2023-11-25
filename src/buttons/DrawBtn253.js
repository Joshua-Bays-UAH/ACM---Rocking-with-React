import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn253(){
	const[btnColor253, setBtnColor253] = useState(localStorage.getItem("savedBtnColor253"));
	useEffect(() => { localStorage.setItem("savedBtnColor253", btnColor253);}, [btnColor253]);
	return(
		<div>
		<button
			className = {btnColor253} 
			onClick = {() => setBtnColor253((btnColor253) => (btnColor253 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn253
