import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn032(){
	const[btnColor032, setBtnColor032] = useState(localStorage.getItem("savedBtnColor032"));
	useEffect(() => { localStorage.setItem("savedBtnColor032", btnColor032);}, [btnColor032]);
	return(
		<div>
		<button
			className = {btnColor032} 
			onClick = {() => setBtnColor032((btnColor032) => (btnColor032 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn032
