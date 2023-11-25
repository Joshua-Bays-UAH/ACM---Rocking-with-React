import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn299(){
	const[btnColor299, setBtnColor299] = useState(localStorage.getItem("savedBtnColor299"));
	useEffect(() => { localStorage.setItem("savedBtnColor299", btnColor299);}, [btnColor299]);
	return(
		<div>
		<button
			className = {btnColor299} 
			onClick = {() => setBtnColor299((btnColor299) => (btnColor299 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn299
