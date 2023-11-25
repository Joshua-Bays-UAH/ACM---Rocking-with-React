import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn171(){
	const[btnColor171, setBtnColor171] = useState(localStorage.getItem("savedBtnColor171"));
	useEffect(() => { localStorage.setItem("savedBtnColor171", btnColor171);}, [btnColor171]);
	return(
		<div>
		<button
			className = {btnColor171} 
			onClick = {() => setBtnColor171((btnColor171) => (btnColor171 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn171
