import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn249(){
	const[btnColor249, setBtnColor249] = useState(localStorage.getItem("savedBtnColor249"));
	useEffect(() => { localStorage.setItem("savedBtnColor249", btnColor249);}, [btnColor249]);
	return(
		<div>
		<button
			className = {btnColor249} 
			onClick = {() => setBtnColor249((btnColor249) => (btnColor249 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn249
