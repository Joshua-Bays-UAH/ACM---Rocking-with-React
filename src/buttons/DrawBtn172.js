import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn172(){
	const[btnColor172, setBtnColor172] = useState(localStorage.getItem("savedBtnColor172"));
	useEffect(() => { localStorage.setItem("savedBtnColor172", btnColor172);}, [btnColor172]);
	return(
		<div>
		<button
			className = {btnColor172} 
			onClick = {() => setBtnColor172((btnColor172) => (btnColor172 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn172
