import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn254(){
	const[btnColor254, setBtnColor254] = useState(localStorage.getItem("savedBtnColor254"));
	useEffect(() => { localStorage.setItem("savedBtnColor254", btnColor254);}, [btnColor254]);
	return(
		<div>
		<button
			className = {btnColor254} 
			onClick = {() => setBtnColor254((btnColor254) => (btnColor254 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn254
