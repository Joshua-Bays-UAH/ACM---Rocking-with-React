import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn136(){
	const[btnColor136, setBtnColor136] = useState(localStorage.getItem("savedBtnColor136"));
	useEffect(() => { localStorage.setItem("savedBtnColor136", btnColor136);}, [btnColor136]);
	return(
		<div>
		<button
			className = {btnColor136} 
			onClick = {() => setBtnColor136((btnColor136) => (btnColor136 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn136
