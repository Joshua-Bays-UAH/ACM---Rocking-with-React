import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn261(){
	const[btnColor261, setBtnColor261] = useState(localStorage.getItem("savedBtnColor261"));
	useEffect(() => { localStorage.setItem("savedBtnColor261", btnColor261);}, [btnColor261]);
	return(
		<div>
		<button
			className = {btnColor261} 
			onClick = {() => setBtnColor261((btnColor261) => (btnColor261 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn261
