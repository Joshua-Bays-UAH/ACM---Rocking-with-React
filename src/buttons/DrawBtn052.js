import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn052(){
	const[btnColor052, setBtnColor052] = useState(localStorage.getItem("savedBtnColor052"));
	useEffect(() => { localStorage.setItem("savedBtnColor052", btnColor052);}, [btnColor052]);
	return(
		<div>
		<button
			className = {btnColor052} 
			onClick = {() => setBtnColor052((btnColor052) => (btnColor052 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn052
