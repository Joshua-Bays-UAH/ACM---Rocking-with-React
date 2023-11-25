import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn284(){
	const[btnColor284, setBtnColor284] = useState(localStorage.getItem("savedBtnColor284"));
	useEffect(() => { localStorage.setItem("savedBtnColor284", btnColor284);}, [btnColor284]);
	return(
		<div>
		<button
			className = {btnColor284} 
			onClick = {() => setBtnColor284((btnColor284) => (btnColor284 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn284
