import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn023(){
	const[btnColor023, setBtnColor023] = useState(localStorage.getItem("savedBtnColor023"));
	useEffect(() => { localStorage.setItem("savedBtnColor023", btnColor023);}, [btnColor023]);
	return(
		<div>
		<button
			className = {btnColor023} 
			onClick = {() => setBtnColor023((btnColor023) => (btnColor023 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn023
