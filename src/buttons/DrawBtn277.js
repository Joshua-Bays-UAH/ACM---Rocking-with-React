import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn277(){
	const[btnColor277, setBtnColor277] = useState(localStorage.getItem("savedBtnColor277"));
	useEffect(() => { localStorage.setItem("savedBtnColor277", btnColor277);}, [btnColor277]);
	return(
		<div>
		<button
			className = {btnColor277} 
			onClick = {() => setBtnColor277((btnColor277) => (btnColor277 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn277
