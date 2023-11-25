import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn005(){
	const[btnColor005, setBtnColor005] = useState(localStorage.getItem("savedBtnColor005"));
	useEffect(() => { localStorage.setItem("savedBtnColor005", btnColor005);}, [btnColor005]);
	return(
		<div>
		<button
			className = {btnColor005} 
			onClick = {() => setBtnColor005((btnColor005) => (btnColor005 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn005
