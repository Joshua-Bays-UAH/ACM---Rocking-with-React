import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn157(){
	const[btnColor157, setBtnColor157] = useState(localStorage.getItem("savedBtnColor157"));
	useEffect(() => { localStorage.setItem("savedBtnColor157", btnColor157);}, [btnColor157]);
	return(
		<div>
		<button
			className = {btnColor157} 
			onClick = {() => setBtnColor157((btnColor157) => (btnColor157 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn157
