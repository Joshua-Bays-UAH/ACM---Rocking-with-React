import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn167(){
	const[btnColor167, setBtnColor167] = useState(localStorage.getItem("savedBtnColor167"));
	useEffect(() => { localStorage.setItem("savedBtnColor167", btnColor167);}, [btnColor167]);
	return(
		<div>
		<button
			className = {btnColor167} 
			onClick = {() => setBtnColor167((btnColor167) => (btnColor167 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn167
