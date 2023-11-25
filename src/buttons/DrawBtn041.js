import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn041(){
	const[btnColor041, setBtnColor041] = useState(localStorage.getItem("savedBtnColor041"));
	useEffect(() => { localStorage.setItem("savedBtnColor041", btnColor041);}, [btnColor041]);
	return(
		<div>
		<button
			className = {btnColor041} 
			onClick = {() => setBtnColor041((btnColor041) => (btnColor041 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn041
