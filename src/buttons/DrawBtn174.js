import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn174(){
	const[btnColor174, setBtnColor174] = useState(localStorage.getItem("savedBtnColor174"));
	useEffect(() => { localStorage.setItem("savedBtnColor174", btnColor174);}, [btnColor174]);
	return(
		<div>
		<button
			className = {btnColor174} 
			onClick = {() => setBtnColor174((btnColor174) => (btnColor174 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn174
