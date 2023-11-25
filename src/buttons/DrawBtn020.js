import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn020(){
	const[btnColor020, setBtnColor020] = useState(localStorage.getItem("savedBtnColor020"));
	useEffect(() => { localStorage.setItem("savedBtnColor020", btnColor020);}, [btnColor020]);
	return(
		<div>
		<button
			className = {btnColor020} 
			onClick = {() => setBtnColor020((btnColor020) => (btnColor020 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn020
