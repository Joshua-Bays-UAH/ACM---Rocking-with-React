import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn125(){
	const[btnColor125, setBtnColor125] = useState(localStorage.getItem("savedBtnColor125"));
	useEffect(() => { localStorage.setItem("savedBtnColor125", btnColor125);}, [btnColor125]);
	return(
		<div>
		<button
			className = {btnColor125} 
			onClick = {() => setBtnColor125((btnColor125) => (btnColor125 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn125
