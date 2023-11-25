import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn237(){
	const[btnColor237, setBtnColor237] = useState(localStorage.getItem("savedBtnColor237"));
	useEffect(() => { localStorage.setItem("savedBtnColor237", btnColor237);}, [btnColor237]);
	return(
		<div>
		<button
			className = {btnColor237} 
			onClick = {() => setBtnColor237((btnColor237) => (btnColor237 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn237
