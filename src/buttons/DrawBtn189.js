import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn189(){
	const[btnColor189, setBtnColor189] = useState(localStorage.getItem("savedBtnColor189"));
	useEffect(() => { localStorage.setItem("savedBtnColor189", btnColor189);}, [btnColor189]);
	return(
		<div>
		<button
			className = {btnColor189} 
			onClick = {() => setBtnColor189((btnColor189) => (btnColor189 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn189
