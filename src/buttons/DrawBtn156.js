import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn156(){
	const[btnColor156, setBtnColor156] = useState(localStorage.getItem("savedBtnColor156"));
	useEffect(() => { localStorage.setItem("savedBtnColor156", btnColor156);}, [btnColor156]);
	return(
		<div>
		<button
			className = {btnColor156} 
			onClick = {() => setBtnColor156((btnColor156) => (btnColor156 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn156
