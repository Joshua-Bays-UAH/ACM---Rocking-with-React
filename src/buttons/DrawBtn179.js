import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn179(){
	const[btnColor179, setBtnColor179] = useState(localStorage.getItem("savedBtnColor179"));
	useEffect(() => { localStorage.setItem("savedBtnColor179", btnColor179);}, [btnColor179]);
	return(
		<div>
		<button
			className = {btnColor179} 
			onClick = {() => setBtnColor179((btnColor179) => (btnColor179 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn179
