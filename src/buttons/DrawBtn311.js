import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn311(){
	const[btnColor311, setBtnColor311] = useState(localStorage.getItem("savedBtnColor311"));
	useEffect(() => { localStorage.setItem("savedBtnColor311", btnColor311);}, [btnColor311]);
	return(
		<div>
		<button
			className = {btnColor311} 
			onClick = {() => setBtnColor311((btnColor311) => (btnColor311 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn311
