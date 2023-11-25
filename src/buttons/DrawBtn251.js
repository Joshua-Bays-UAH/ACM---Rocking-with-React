import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn251(){
	const[btnColor251, setBtnColor251] = useState(localStorage.getItem("savedBtnColor251"));
	useEffect(() => { localStorage.setItem("savedBtnColor251", btnColor251);}, [btnColor251]);
	return(
		<div>
		<button
			className = {btnColor251} 
			onClick = {() => setBtnColor251((btnColor251) => (btnColor251 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn251
