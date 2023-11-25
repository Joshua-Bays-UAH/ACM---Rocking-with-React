import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn053(){
	const[btnColor053, setBtnColor053] = useState(localStorage.getItem("savedBtnColor053"));
	useEffect(() => { localStorage.setItem("savedBtnColor053", btnColor053);}, [btnColor053]);
	return(
		<div>
		<button
			className = {btnColor053} 
			onClick = {() => setBtnColor053((btnColor053) => (btnColor053 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn053
