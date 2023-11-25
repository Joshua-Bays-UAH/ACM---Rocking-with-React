import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn097(){
	const[btnColor097, setBtnColor097] = useState(localStorage.getItem("savedBtnColor097"));
	useEffect(() => { localStorage.setItem("savedBtnColor097", btnColor097);}, [btnColor097]);
	return(
		<div>
		<button
			className = {btnColor097} 
			onClick = {() => setBtnColor097((btnColor097) => (btnColor097 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn097
