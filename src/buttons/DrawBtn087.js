import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn087(){
	const[btnColor087, setBtnColor087] = useState(localStorage.getItem("savedBtnColor087"));
	useEffect(() => { localStorage.setItem("savedBtnColor087", btnColor087);}, [btnColor087]);
	return(
		<div>
		<button
			className = {btnColor087} 
			onClick = {() => setBtnColor087((btnColor087) => (btnColor087 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn087
