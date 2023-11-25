import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn164(){
	const[btnColor164, setBtnColor164] = useState(localStorage.getItem("savedBtnColor164"));
	useEffect(() => { localStorage.setItem("savedBtnColor164", btnColor164);}, [btnColor164]);
	return(
		<div>
		<button
			className = {btnColor164} 
			onClick = {() => setBtnColor164((btnColor164) => (btnColor164 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn164
