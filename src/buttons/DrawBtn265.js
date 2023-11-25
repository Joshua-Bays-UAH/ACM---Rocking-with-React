import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn265(){
	const[btnColor265, setBtnColor265] = useState(localStorage.getItem("savedBtnColor265"));
	useEffect(() => { localStorage.setItem("savedBtnColor265", btnColor265);}, [btnColor265]);
	return(
		<div>
		<button
			className = {btnColor265} 
			onClick = {() => setBtnColor265((btnColor265) => (btnColor265 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn265
