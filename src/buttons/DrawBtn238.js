import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn238(){
	const[btnColor238, setBtnColor238] = useState(localStorage.getItem("savedBtnColor238"));
	useEffect(() => { localStorage.setItem("savedBtnColor238", btnColor238);}, [btnColor238]);
	return(
		<div>
		<button
			className = {btnColor238} 
			onClick = {() => setBtnColor238((btnColor238) => (btnColor238 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn238
