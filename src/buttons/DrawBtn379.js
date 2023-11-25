import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn379(){
	const[btnColor379, setBtnColor379] = useState(localStorage.getItem("savedBtnColor379"));
	useEffect(() => { localStorage.setItem("savedBtnColor379", btnColor379);}, [btnColor379]);
	return(
		<div>
		<button
			className = {btnColor379} 
			onClick = {() => setBtnColor379((btnColor379) => (btnColor379 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn379
