import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn096(){
	const[btnColor096, setBtnColor096] = useState(localStorage.getItem("savedBtnColor096"));
	useEffect(() => { localStorage.setItem("savedBtnColor096", btnColor096);}, [btnColor096]);
	return(
		<div>
		<button
			className = {btnColor096} 
			onClick = {() => setBtnColor096((btnColor096) => (btnColor096 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn096
