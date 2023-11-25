import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn300(){
	const[btnColor300, setBtnColor300] = useState(localStorage.getItem("savedBtnColor300"));
	useEffect(() => { localStorage.setItem("savedBtnColor300", btnColor300);}, [btnColor300]);
	return(
		<div>
		<button
			className = {btnColor300} 
			onClick = {() => setBtnColor300((btnColor300) => (btnColor300 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn300
