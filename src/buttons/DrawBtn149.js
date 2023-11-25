import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn149(){
	const[btnColor149, setBtnColor149] = useState(localStorage.getItem("savedBtnColor149"));
	useEffect(() => { localStorage.setItem("savedBtnColor149", btnColor149);}, [btnColor149]);
	return(
		<div>
		<button
			className = {btnColor149} 
			onClick = {() => setBtnColor149((btnColor149) => (btnColor149 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn149
