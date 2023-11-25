import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn101(){
	const[btnColor101, setBtnColor101] = useState(localStorage.getItem("savedBtnColor101"));
	useEffect(() => { localStorage.setItem("savedBtnColor101", btnColor101);}, [btnColor101]);
	return(
		<div>
		<button
			className = {btnColor101} 
			onClick = {() => setBtnColor101((btnColor101) => (btnColor101 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn101
