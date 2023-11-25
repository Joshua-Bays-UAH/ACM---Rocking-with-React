import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn121(){
	const[btnColor121, setBtnColor121] = useState(localStorage.getItem("savedBtnColor121"));
	useEffect(() => { localStorage.setItem("savedBtnColor121", btnColor121);}, [btnColor121]);
	return(
		<div>
		<button
			className = {btnColor121} 
			onClick = {() => setBtnColor121((btnColor121) => (btnColor121 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn121
