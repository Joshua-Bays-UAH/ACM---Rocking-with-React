import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn050(){
	const[btnColor050, setBtnColor050] = useState(localStorage.getItem("savedBtnColor050"));
	useEffect(() => { localStorage.setItem("savedBtnColor050", btnColor050);}, [btnColor050]);
	return(
		<div>
		<button
			className = {btnColor050} 
			onClick = {() => setBtnColor050((btnColor050) => (btnColor050 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn050
