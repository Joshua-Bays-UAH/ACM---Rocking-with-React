import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn00(){
	const[btnColor00, setBtnColor00] = useState(localStorage.getItem("savedBtnColor00"));
	useEffect(() => { localStorage.setItem("savedBtnColor00", btnColor00);}, [btnColor00]);
	return(
		<div>
		<button
			className = {btnColor00} 
			onClick = {() => setBtnColor00((btnColor00) => (btnColor00 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn00
