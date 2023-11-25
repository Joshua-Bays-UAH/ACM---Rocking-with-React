import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn268(){
	const[btnColor268, setBtnColor268] = useState(localStorage.getItem("savedBtnColor268"));
	useEffect(() => { localStorage.setItem("savedBtnColor268", btnColor268);}, [btnColor268]);
	return(
		<div>
		<button
			className = {btnColor268} 
			onClick = {() => setBtnColor268((btnColor268) => (btnColor268 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn268
