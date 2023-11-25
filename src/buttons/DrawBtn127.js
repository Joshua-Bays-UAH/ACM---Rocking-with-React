import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn127(){
	const[btnColor127, setBtnColor127] = useState(localStorage.getItem("savedBtnColor127"));
	useEffect(() => { localStorage.setItem("savedBtnColor127", btnColor127);}, [btnColor127]);
	return(
		<div>
		<button
			className = {btnColor127} 
			onClick = {() => setBtnColor127((btnColor127) => (btnColor127 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn127
