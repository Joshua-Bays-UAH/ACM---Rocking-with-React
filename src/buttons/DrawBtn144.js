import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn144(){
	const[btnColor144, setBtnColor144] = useState(localStorage.getItem("savedBtnColor144"));
	useEffect(() => { localStorage.setItem("savedBtnColor144", btnColor144);}, [btnColor144]);
	return(
		<div>
		<button
			className = {btnColor144} 
			onClick = {() => setBtnColor144((btnColor144) => (btnColor144 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn144
