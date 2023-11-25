import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn331(){
	const[btnColor331, setBtnColor331] = useState(localStorage.getItem("savedBtnColor331"));
	useEffect(() => { localStorage.setItem("savedBtnColor331", btnColor331);}, [btnColor331]);
	return(
		<div>
		<button
			className = {btnColor331} 
			onClick = {() => setBtnColor331((btnColor331) => (btnColor331 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn331
