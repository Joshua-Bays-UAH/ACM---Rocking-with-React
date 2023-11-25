import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn055(){
	const[btnColor055, setBtnColor055] = useState(localStorage.getItem("savedBtnColor055"));
	useEffect(() => { localStorage.setItem("savedBtnColor055", btnColor055);}, [btnColor055]);
	return(
		<div>
		<button
			className = {btnColor055} 
			onClick = {() => setBtnColor055((btnColor055) => (btnColor055 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn055
