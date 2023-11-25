import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn203(){
	const[btnColor203, setBtnColor203] = useState(localStorage.getItem("savedBtnColor203"));
	useEffect(() => { localStorage.setItem("savedBtnColor203", btnColor203);}, [btnColor203]);
	return(
		<div>
		<button
			className = {btnColor203} 
			onClick = {() => setBtnColor203((btnColor203) => (btnColor203 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn203
