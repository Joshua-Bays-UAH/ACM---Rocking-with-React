import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn357(){
	const[btnColor357, setBtnColor357] = useState(localStorage.getItem("savedBtnColor357"));
	useEffect(() => { localStorage.setItem("savedBtnColor357", btnColor357);}, [btnColor357]);
	return(
		<div>
		<button
			className = {btnColor357} 
			onClick = {() => setBtnColor357((btnColor357) => (btnColor357 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn357
