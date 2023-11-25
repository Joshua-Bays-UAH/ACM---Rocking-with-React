import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn093(){
	const[btnColor093, setBtnColor093] = useState(localStorage.getItem("savedBtnColor093"));
	useEffect(() => { localStorage.setItem("savedBtnColor093", btnColor093);}, [btnColor093]);
	return(
		<div>
		<button
			className = {btnColor093} 
			onClick = {() => setBtnColor093((btnColor093) => (btnColor093 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn093
