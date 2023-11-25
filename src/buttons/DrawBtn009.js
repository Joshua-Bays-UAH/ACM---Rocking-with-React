import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn009(){
	const[btnColor009, setBtnColor009] = useState(localStorage.getItem("savedBtnColor009"));
	useEffect(() => { localStorage.setItem("savedBtnColor009", btnColor009);}, [btnColor009]);
	return(
		<div>
		<button
			className = {btnColor009} 
			onClick = {() => setBtnColor009((btnColor009) => (btnColor009 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn009
