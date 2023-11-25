import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn256(){
	const[btnColor256, setBtnColor256] = useState(localStorage.getItem("savedBtnColor256"));
	useEffect(() => { localStorage.setItem("savedBtnColor256", btnColor256);}, [btnColor256]);
	return(
		<div>
		<button
			className = {btnColor256} 
			onClick = {() => setBtnColor256((btnColor256) => (btnColor256 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn256
