import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn316(){
	const[btnColor316, setBtnColor316] = useState(localStorage.getItem("savedBtnColor316"));
	useEffect(() => { localStorage.setItem("savedBtnColor316", btnColor316);}, [btnColor316]);
	return(
		<div>
		<button
			className = {btnColor316} 
			onClick = {() => setBtnColor316((btnColor316) => (btnColor316 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn316
