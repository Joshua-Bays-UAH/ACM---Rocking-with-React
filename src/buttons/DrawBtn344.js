import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn344(){
	const[btnColor344, setBtnColor344] = useState(localStorage.getItem("savedBtnColor344"));
	useEffect(() => { localStorage.setItem("savedBtnColor344", btnColor344);}, [btnColor344]);
	return(
		<div>
		<button
			className = {btnColor344} 
			onClick = {() => setBtnColor344((btnColor344) => (btnColor344 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn344
