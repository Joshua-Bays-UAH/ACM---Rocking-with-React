import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn282(){
	const[btnColor282, setBtnColor282] = useState(localStorage.getItem("savedBtnColor282"));
	useEffect(() => { localStorage.setItem("savedBtnColor282", btnColor282);}, [btnColor282]);
	return(
		<div>
		<button
			className = {btnColor282} 
			onClick = {() => setBtnColor282((btnColor282) => (btnColor282 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn282
