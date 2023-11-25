import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn302(){
	const[btnColor302, setBtnColor302] = useState(localStorage.getItem("savedBtnColor302"));
	useEffect(() => { localStorage.setItem("savedBtnColor302", btnColor302);}, [btnColor302]);
	return(
		<div>
		<button
			className = {btnColor302} 
			onClick = {() => setBtnColor302((btnColor302) => (btnColor302 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn302
