import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn160(){
	const[btnColor160, setBtnColor160] = useState(localStorage.getItem("savedBtnColor160"));
	useEffect(() => { localStorage.setItem("savedBtnColor160", btnColor160);}, [btnColor160]);
	return(
		<div>
		<button
			className = {btnColor160} 
			onClick = {() => setBtnColor160((btnColor160) => (btnColor160 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn160
