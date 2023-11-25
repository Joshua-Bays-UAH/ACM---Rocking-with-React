import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn228(){
	const[btnColor228, setBtnColor228] = useState(localStorage.getItem("savedBtnColor228"));
	useEffect(() => { localStorage.setItem("savedBtnColor228", btnColor228);}, [btnColor228]);
	return(
		<div>
		<button
			className = {btnColor228} 
			onClick = {() => setBtnColor228((btnColor228) => (btnColor228 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn228
