import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn017(){
	const[btnColor017, setBtnColor017] = useState(localStorage.getItem("savedBtnColor017"));
	useEffect(() => { localStorage.setItem("savedBtnColor017", btnColor017);}, [btnColor017]);
	return(
		<div>
		<button
			className = {btnColor017} 
			onClick = {() => setBtnColor017((btnColor017) => (btnColor017 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn017
