import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn213(){
	const[btnColor213, setBtnColor213] = useState(localStorage.getItem("savedBtnColor213"));
	useEffect(() => { localStorage.setItem("savedBtnColor213", btnColor213);}, [btnColor213]);
	return(
		<div>
		<button
			className = {btnColor213} 
			onClick = {() => setBtnColor213((btnColor213) => (btnColor213 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn213
