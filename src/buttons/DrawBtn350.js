import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn350(){
	const[btnColor350, setBtnColor350] = useState(localStorage.getItem("savedBtnColor350"));
	useEffect(() => { localStorage.setItem("savedBtnColor350", btnColor350);}, [btnColor350]);
	return(
		<div>
		<button
			className = {btnColor350} 
			onClick = {() => setBtnColor350((btnColor350) => (btnColor350 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn350
