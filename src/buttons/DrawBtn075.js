import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn075(){
	const[btnColor075, setBtnColor075] = useState(localStorage.getItem("savedBtnColor075"));
	useEffect(() => { localStorage.setItem("savedBtnColor075", btnColor075);}, [btnColor075]);
	return(
		<div>
		<button
			className = {btnColor075} 
			onClick = {() => setBtnColor075((btnColor075) => (btnColor075 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn075
