import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn025(){
	const[btnColor025, setBtnColor025] = useState(localStorage.getItem("savedBtnColor025"));
	useEffect(() => { localStorage.setItem("savedBtnColor025", btnColor025);}, [btnColor025]);
	return(
		<div>
		<button
			className = {btnColor025} 
			onClick = {() => setBtnColor025((btnColor025) => (btnColor025 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn025
