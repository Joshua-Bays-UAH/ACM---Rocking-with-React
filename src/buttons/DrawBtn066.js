import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn066(){
	const[btnColor066, setBtnColor066] = useState(localStorage.getItem("savedBtnColor066"));
	useEffect(() => { localStorage.setItem("savedBtnColor066", btnColor066);}, [btnColor066]);
	return(
		<div>
		<button
			className = {btnColor066} 
			onClick = {() => setBtnColor066((btnColor066) => (btnColor066 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn066
