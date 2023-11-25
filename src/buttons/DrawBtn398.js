import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn398(){
	const[btnColor398, setBtnColor398] = useState(localStorage.getItem("savedBtnColor398"));
	useEffect(() => { localStorage.setItem("savedBtnColor398", btnColor398);}, [btnColor398]);
	return(
		<div>
		<button
			className = {btnColor398} 
			onClick = {() => setBtnColor398((btnColor398) => (btnColor398 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn398
