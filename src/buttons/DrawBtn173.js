import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn173(){
	const[btnColor173, setBtnColor173] = useState(localStorage.getItem("savedBtnColor173"));
	useEffect(() => { localStorage.setItem("savedBtnColor173", btnColor173);}, [btnColor173]);
	return(
		<div>
		<button
			className = {btnColor173} 
			onClick = {() => setBtnColor173((btnColor173) => (btnColor173 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn173
