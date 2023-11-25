import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn038(){
	const[btnColor038, setBtnColor038] = useState(localStorage.getItem("savedBtnColor038"));
	useEffect(() => { localStorage.setItem("savedBtnColor038", btnColor038);}, [btnColor038]);
	return(
		<div>
		<button
			className = {btnColor038} 
			onClick = {() => setBtnColor038((btnColor038) => (btnColor038 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn038
