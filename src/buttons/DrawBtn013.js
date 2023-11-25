import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn013(){
	const[btnColor013, setBtnColor013] = useState(localStorage.getItem("savedBtnColor013"));
	useEffect(() => { localStorage.setItem("savedBtnColor013", btnColor013);}, [btnColor013]);
	return(
		<div>
		<button
			className = {btnColor013} 
			onClick = {() => setBtnColor013((btnColor013) => (btnColor013 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn013
