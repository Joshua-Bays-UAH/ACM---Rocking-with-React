import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn146(){
	const[btnColor146, setBtnColor146] = useState(localStorage.getItem("savedBtnColor146"));
	useEffect(() => { localStorage.setItem("savedBtnColor146", btnColor146);}, [btnColor146]);
	return(
		<div>
		<button
			className = {btnColor146} 
			onClick = {() => setBtnColor146((btnColor146) => (btnColor146 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn146
