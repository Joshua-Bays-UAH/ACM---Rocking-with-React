import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn024(){
	const[btnColor024, setBtnColor024] = useState(localStorage.getItem("savedBtnColor024"));
	useEffect(() => { localStorage.setItem("savedBtnColor024", btnColor024);}, [btnColor024]);
	return(
		<div>
		<button
			className = {btnColor024} 
			onClick = {() => setBtnColor024((btnColor024) => (btnColor024 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn024
