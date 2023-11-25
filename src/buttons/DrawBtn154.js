import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn154(){
	const[btnColor154, setBtnColor154] = useState(localStorage.getItem("savedBtnColor154"));
	useEffect(() => { localStorage.setItem("savedBtnColor154", btnColor154);}, [btnColor154]);
	return(
		<div>
		<button
			className = {btnColor154} 
			onClick = {() => setBtnColor154((btnColor154) => (btnColor154 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn154
