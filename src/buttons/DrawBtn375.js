import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn375(){
	const[btnColor375, setBtnColor375] = useState(localStorage.getItem("savedBtnColor375"));
	useEffect(() => { localStorage.setItem("savedBtnColor375", btnColor375);}, [btnColor375]);
	return(
		<div>
		<button
			className = {btnColor375} 
			onClick = {() => setBtnColor375((btnColor375) => (btnColor375 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn375
