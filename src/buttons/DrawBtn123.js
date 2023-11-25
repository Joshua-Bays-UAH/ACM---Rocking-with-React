import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn123(){
	const[btnColor123, setBtnColor123] = useState(localStorage.getItem("savedBtnColor123"));
	useEffect(() => { localStorage.setItem("savedBtnColor123", btnColor123);}, [btnColor123]);
	return(
		<div>
		<button
			className = {btnColor123} 
			onClick = {() => setBtnColor123((btnColor123) => (btnColor123 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn123
