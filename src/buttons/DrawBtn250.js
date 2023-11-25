import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn250(){
	const[btnColor250, setBtnColor250] = useState(localStorage.getItem("savedBtnColor250"));
	useEffect(() => { localStorage.setItem("savedBtnColor250", btnColor250);}, [btnColor250]);
	return(
		<div>
		<button
			className = {btnColor250} 
			onClick = {() => setBtnColor250((btnColor250) => (btnColor250 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn250
