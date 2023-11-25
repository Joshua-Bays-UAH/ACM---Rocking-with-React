import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn206(){
	const[btnColor206, setBtnColor206] = useState(localStorage.getItem("savedBtnColor206"));
	useEffect(() => { localStorage.setItem("savedBtnColor206", btnColor206);}, [btnColor206]);
	return(
		<div>
		<button
			className = {btnColor206} 
			onClick = {() => setBtnColor206((btnColor206) => (btnColor206 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn206
