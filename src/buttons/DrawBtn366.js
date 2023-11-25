import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn366(){
	const[btnColor366, setBtnColor366] = useState(localStorage.getItem("savedBtnColor366"));
	useEffect(() => { localStorage.setItem("savedBtnColor366", btnColor366);}, [btnColor366]);
	return(
		<div>
		<button
			className = {btnColor366} 
			onClick = {() => setBtnColor366((btnColor366) => (btnColor366 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn366
