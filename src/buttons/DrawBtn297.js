import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn297(){
	const[btnColor297, setBtnColor297] = useState(localStorage.getItem("savedBtnColor297"));
	useEffect(() => { localStorage.setItem("savedBtnColor297", btnColor297);}, [btnColor297]);
	return(
		<div>
		<button
			className = {btnColor297} 
			onClick = {() => setBtnColor297((btnColor297) => (btnColor297 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn297
