import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn240(){
	const[btnColor240, setBtnColor240] = useState(localStorage.getItem("savedBtnColor240"));
	useEffect(() => { localStorage.setItem("savedBtnColor240", btnColor240);}, [btnColor240]);
	return(
		<div>
		<button
			className = {btnColor240} 
			onClick = {() => setBtnColor240((btnColor240) => (btnColor240 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn240
