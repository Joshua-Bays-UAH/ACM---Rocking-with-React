import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn108(){
	const[btnColor108, setBtnColor108] = useState(localStorage.getItem("savedBtnColor108"));
	useEffect(() => { localStorage.setItem("savedBtnColor108", btnColor108);}, [btnColor108]);
	return(
		<div>
		<button
			className = {btnColor108} 
			onClick = {() => setBtnColor108((btnColor108) => (btnColor108 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn108
