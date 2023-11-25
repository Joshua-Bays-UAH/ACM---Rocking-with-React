import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn216(){
	const[btnColor216, setBtnColor216] = useState(localStorage.getItem("savedBtnColor216"));
	useEffect(() => { localStorage.setItem("savedBtnColor216", btnColor216);}, [btnColor216]);
	return(
		<div>
		<button
			className = {btnColor216} 
			onClick = {() => setBtnColor216((btnColor216) => (btnColor216 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn216
