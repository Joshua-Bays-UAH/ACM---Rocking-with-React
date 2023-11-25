import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn243(){
	const[btnColor243, setBtnColor243] = useState(localStorage.getItem("savedBtnColor243"));
	useEffect(() => { localStorage.setItem("savedBtnColor243", btnColor243);}, [btnColor243]);
	return(
		<div>
		<button
			className = {btnColor243} 
			onClick = {() => setBtnColor243((btnColor243) => (btnColor243 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn243
