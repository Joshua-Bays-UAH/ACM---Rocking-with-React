import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn290(){
	const[btnColor290, setBtnColor290] = useState(localStorage.getItem("savedBtnColor290"));
	useEffect(() => { localStorage.setItem("savedBtnColor290", btnColor290);}, [btnColor290]);
	return(
		<div>
		<button
			className = {btnColor290} 
			onClick = {() => setBtnColor290((btnColor290) => (btnColor290 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn290
