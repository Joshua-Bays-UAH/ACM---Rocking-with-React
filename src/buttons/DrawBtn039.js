import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn039(){
	const[btnColor039, setBtnColor039] = useState(localStorage.getItem("savedBtnColor039"));
	useEffect(() => { localStorage.setItem("savedBtnColor039", btnColor039);}, [btnColor039]);
	return(
		<div>
		<button
			className = {btnColor039} 
			onClick = {() => setBtnColor039((btnColor039) => (btnColor039 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn039
