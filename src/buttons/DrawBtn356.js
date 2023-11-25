import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn356(){
	const[btnColor356, setBtnColor356] = useState(localStorage.getItem("savedBtnColor356"));
	useEffect(() => { localStorage.setItem("savedBtnColor356", btnColor356);}, [btnColor356]);
	return(
		<div>
		<button
			className = {btnColor356} 
			onClick = {() => setBtnColor356((btnColor356) => (btnColor356 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn356
