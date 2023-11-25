import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn392(){
	const[btnColor392, setBtnColor392] = useState(localStorage.getItem("savedBtnColor392"));
	useEffect(() => { localStorage.setItem("savedBtnColor392", btnColor392);}, [btnColor392]);
	return(
		<div>
		<button
			className = {btnColor392} 
			onClick = {() => setBtnColor392((btnColor392) => (btnColor392 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn392
