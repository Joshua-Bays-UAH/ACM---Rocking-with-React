import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn218(){
	const[btnColor218, setBtnColor218] = useState(localStorage.getItem("savedBtnColor218"));
	useEffect(() => { localStorage.setItem("savedBtnColor218", btnColor218);}, [btnColor218]);
	return(
		<div>
		<button
			className = {btnColor218} 
			onClick = {() => setBtnColor218((btnColor218) => (btnColor218 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn218
