import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn303(){
	const[btnColor303, setBtnColor303] = useState(localStorage.getItem("savedBtnColor303"));
	useEffect(() => { localStorage.setItem("savedBtnColor303", btnColor303);}, [btnColor303]);
	return(
		<div>
		<button
			className = {btnColor303} 
			onClick = {() => setBtnColor303((btnColor303) => (btnColor303 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn303
