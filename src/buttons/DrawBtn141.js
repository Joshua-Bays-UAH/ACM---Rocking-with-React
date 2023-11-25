import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn141(){
	const[btnColor141, setBtnColor141] = useState(localStorage.getItem("savedBtnColor141"));
	useEffect(() => { localStorage.setItem("savedBtnColor141", btnColor141);}, [btnColor141]);
	return(
		<div>
		<button
			className = {btnColor141} 
			onClick = {() => setBtnColor141((btnColor141) => (btnColor141 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn141
