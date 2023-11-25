import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn396(){
	const[btnColor396, setBtnColor396] = useState(localStorage.getItem("savedBtnColor396"));
	useEffect(() => { localStorage.setItem("savedBtnColor396", btnColor396);}, [btnColor396]);
	return(
		<div>
		<button
			className = {btnColor396} 
			onClick = {() => setBtnColor396((btnColor396) => (btnColor396 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn396
