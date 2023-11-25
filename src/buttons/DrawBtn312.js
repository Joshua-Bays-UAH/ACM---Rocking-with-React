import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn312(){
	const[btnColor312, setBtnColor312] = useState(localStorage.getItem("savedBtnColor312"));
	useEffect(() => { localStorage.setItem("savedBtnColor312", btnColor312);}, [btnColor312]);
	return(
		<div>
		<button
			className = {btnColor312} 
			onClick = {() => setBtnColor312((btnColor312) => (btnColor312 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn312
