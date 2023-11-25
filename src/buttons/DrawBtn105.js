import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn105(){
	const[btnColor105, setBtnColor105] = useState(localStorage.getItem("savedBtnColor105"));
	useEffect(() => { localStorage.setItem("savedBtnColor105", btnColor105);}, [btnColor105]);
	return(
		<div>
		<button
			className = {btnColor105} 
			onClick = {() => setBtnColor105((btnColor105) => (btnColor105 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn105
