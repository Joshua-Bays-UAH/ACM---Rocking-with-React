import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn245(){
	const[btnColor245, setBtnColor245] = useState(localStorage.getItem("savedBtnColor245"));
	useEffect(() => { localStorage.setItem("savedBtnColor245", btnColor245);}, [btnColor245]);
	return(
		<div>
		<button
			className = {btnColor245} 
			onClick = {() => setBtnColor245((btnColor245) => (btnColor245 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn245
