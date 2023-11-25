import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn084(){
	const[btnColor084, setBtnColor084] = useState(localStorage.getItem("savedBtnColor084"));
	useEffect(() => { localStorage.setItem("savedBtnColor084", btnColor084);}, [btnColor084]);
	return(
		<div>
		<button
			className = {btnColor084} 
			onClick = {() => setBtnColor084((btnColor084) => (btnColor084 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn084
