import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn065(){
	const[btnColor065, setBtnColor065] = useState(localStorage.getItem("savedBtnColor065"));
	useEffect(() => { localStorage.setItem("savedBtnColor065", btnColor065);}, [btnColor065]);
	return(
		<div>
		<button
			className = {btnColor065} 
			onClick = {() => setBtnColor065((btnColor065) => (btnColor065 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn065
