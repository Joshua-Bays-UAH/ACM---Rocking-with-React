import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn211(){
	const[btnColor211, setBtnColor211] = useState(localStorage.getItem("savedBtnColor211"));
	useEffect(() => { localStorage.setItem("savedBtnColor211", btnColor211);}, [btnColor211]);
	return(
		<div>
		<button
			className = {btnColor211} 
			onClick = {() => setBtnColor211((btnColor211) => (btnColor211 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn211
