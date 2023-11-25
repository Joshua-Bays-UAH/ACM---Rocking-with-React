import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn054(){
	const[btnColor054, setBtnColor054] = useState(localStorage.getItem("savedBtnColor054"));
	useEffect(() => { localStorage.setItem("savedBtnColor054", btnColor054);}, [btnColor054]);
	return(
		<div>
		<button
			className = {btnColor054} 
			onClick = {() => setBtnColor054((btnColor054) => (btnColor054 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn054
